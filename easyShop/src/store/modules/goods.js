import { observable, action} from "mobx";
import {getGoodsDetailData,getGoodsRelateds,getGoodsCountNum,addShopCar} from "../../services/index"
export default class goods{
    // @observable 修饰属性
    @observable goodsDetailData = {};
    @observable goodsRelated = [];
    @observable goodsCounts = 0
    // @action 修饰方法
    
    @action getGoodsDetail = async (params)=>{
        let data = await getGoodsDetailData(params)
        console.log(data.data)
        this.goodsDetailData = data.data
    }
    @action getGoodsRelated = async (params)=>{
        let data = await getGoodsRelateds(params)
        console.log(data.data)
        this.goodsRelated = data.data
    }
    @action getGoodsCounts = async ()=>{
        let data = await getGoodsCountNum()
        console.log(data)
        this.goodsCounts = data.data.cartTotal.goodsCount
    }
    
}