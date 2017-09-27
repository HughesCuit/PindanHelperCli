<template>
  <div>
    <div class="vux-demo">
      <h1> 拼单助手 </h1>
    </div>
    <div class="appending-area">
      <label>名字</label>
      <input type="text" placeholder="名字" v-model="name" v-focus="focusStatus">
      <label>价格</label>
      <input type="text" placeholder="价格" v-model="price">
      <button type="submit" v-on:click="append(name, price)" >添加</button>
      <input type="text" placeholder="总价" v-model="total_price">
      <button type="submit" v-on:click="submit(total_price)" >提交</button>
    </div>
    <group title="拼单">
      <cell-form-preview :list="list" is-link></cell-form-preview>
    </group>
    <div class="submit-area">
    </div>
    <group title="结算">
      <cell-form-preview :list="prices" is-link></cell-form-preview>
    </group>
  </div>
</template>

<script>
import { Group, Cell, CellFormPreview } from 'vux'
import axios from 'axios'

export default {
  components: {
    Group,
    Cell,
    CellFormPreview,
    axios
  },
  data () {
    return {
      list: [],
      prices: []
    }
  },
  directives: {
    focus: {
      inserted: function (el, {value}) {
        if (value) {
          el.focus()
        }
      },
      update: function (el, {value}) {
        if (value) {
          el.focus()
        }
      }
    }
  },
  methods: {
    append: function (name, price) {
      this.list.push({
        label: name,
        value: price
      })
      this.focusStatus = true
    },
    submit: function (totalPrice) {
      let params = {
        actual_price: parseFloat(totalPrice),
        prices: this.list.map(function (x) {
          return {
            name: x.label,
            price: parseFloat(x.value)
          }
        })
      }
      console.log(params)
      let result = axios.request({
        url: '/api/pindan',
        method: 'POST',
        baseURL: 'http://120.27.17.226:3000',
        headers: {'Content-Type': 'application/json'},
        data: params
      })
      .then(response => {
        console.log(response)
        this.prices = response.data.map(function (x) {
          return {
            label: x.name,
            value: x.price
          }
        })
      })
      .catch(function (error) {
        alert(error)
      })
      this.prices = result.map(function (x) {
        return {
          label: x.name,
          value: x.price
        }
      })
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
input, button {
  width: 100px;
  height: 30px;
}
.appending-area, .appending-btn, .submit-area {
  text-align: center;
  top: 50px;
}
label {
  left: 50px;
}

.appending-btn > button {
  width: 100px;
  height: 20px;
}
</style>
