<template>
  <div>
    <div class="vux-demo">
      <x-header :left-options="{showBack: false}"> 拼单助手 </x-header>
    </div>
    <group title="拼单">
      <cell-form-preview :list="list" is-link></cell-form-preview>
    </group>
    <div class="appending-area">
      <group>
        <x-input type="text" title="名字" placeholder="名字" ref="nameInput" @on-focus="nameFocus" @on-enter="nameEnter" v-model="name" ></x-input>
        <x-input type="number" title="价格" placeholder="价格" ref="priceInput" @on-focus="priceFocus" @on-enter="priceEnter" v-model="price"></x-input>
        <XButton type="primary" v-on:click.native="append(name, price)" >添加</XButton>
        <x-input type="number" title="总价" placeholder="总价" ref="totalPriceInput" @on-focus="totalPriceFocus" @on-enter="submit(total_price)" v-model="total_price"></x-input>
        <XButton type="primary" v-on:click.native="submit(total_price)" >提交</XButton>
      </group>
    </div>
    <group title="结算">
      <cell-form-preview :list="prices" is-link></cell-form-preview>
    </group>
  </div>
</template>

<script>
import { Group, Cell, CellFormPreview, XButton, XInput, XHeader } from 'vux'
import axios from 'axios'

export default {
  components: {
    Group,
    Cell,
    CellFormPreview,
    XButton,
    XInput,
    XHeader,
    axios
  },
  data () {
    return {
      list: [],
      prices: []
    }
  },
  methods: {
    nameFocus: function () {
      this.name = ''
    },
    nameEnter: function () {
      this.$refs.priceInput.focus()
    },
    priceFocus: function () {
      this.price = ''
    },
    totalPriceFocus: function () {
      this.total_price = ''
    },
    priceEnter: function () {
      let name = this.name
      let price = this.price
      this.append(name, price)
    },
    append: function (name, price) {
      this.list.push({
        label: name,
        value: price
      })
      this.name = ''
      this.price = ''
      this.$refs.nameInput.focus()
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
        baseURL: 'http://120.27.17.226',
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

.appending-area, .appending-btn, .submit-area {
  text-align: center;
  top: 50px;
}
.appending-btn > button {
  width: 100px;
  height: 20px;
}
</style>
