const { model, Schema } = require("mongoose");

const customerSchema = new Schema({


	cust_id:{
        type:Number,
        required: true,
        unique:true,
      
    },
	name:{
        type: String,
        required: true,
    },
	details:{        
        type: String,
    },
	bardana:{type:Number},
	balance:{type:Number},
	transactions:[
        {
        trans_id:{type:Number},
		entity:{type:Number},
		details:{type:String},
		weigth:{type:Number},
		rate:{type:Number},
		type:{type:String},
		person:{type:String},
		deal:{type:Number},
		total:{type:Number},
		kaat:{type:Number},
		kaat_cost:{type:Number},
		nets:{type:Number},
		net_balance:{type:Number},
		dates:{type:Date},
        }
    ]


   
  });

module.exports = model("Customer", customerSchema);
