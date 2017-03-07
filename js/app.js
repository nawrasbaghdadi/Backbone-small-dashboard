 'use strict';
var app = {};
var data =[
{
	id :'Tenrox-R1_1235',
	owner : 'samy',
	state : 'Pending',
	timeStarted: '4/18/2014 12:12 pm',
	value : {
		metrics : {
		test : 72,
		maintainability : 50,
		security : 72,
		workmanship : 30,
		url : 'url/matrics'

	},
	build : {
		datetime : '10:44am - 4/17/2014',
		url:'ulr/build'
	},
	utest :{
		passed : 73,
		fail: 10,
		codepassed : 76
	},
	ftest :{
		passed : 73,
		fail: 10,
		codepassed : 76
		},
	},
},
{
	id :'432461',
	owner : 'samy',
	state : 'complete',
	value : {
		metrics : {
		test : 72,
		maintainability : 72,
		security : 72,
		workmanship : 72,
		url : 'url/matrics'

	},
	build : {
		datetime : '10:44am - 4/17/2014',
		url:'ulr/build'
	},
	utest :{
		passed : 73,
		fail: 10,
		codepassed : 76
	},
	ftest :{
		passed : 73,
		fail: 10,
		codepassed : 76
		},
	},
},

];
app.data = data;

//Module
app.AppModel = Backbone.Model.extend({
	defaults:{
		title : ''
	}
});

app.AppModeList = Backbone.Collection.extend({
	model : app.AppModel,
	localStorge : new Store('app-store')
});

//view


app.newAppView = Backbone.View.extend({
	el: '#container',
	template : _.template($('#item-tpl').html()),
	initialize:function(){
		 this.render();
		 //this.model.on('change', this.render, this);
	},
	render : function(){
		console.log(typeof(data));
		this.$el.html(this.template(app.data));
		return this;
	}
});

app.arrows = function(x){
							if(x > 50){
								return "arrow-up";
								}else if(x < 50){
									return "arrow-down";
								}
								else{
									return "arrow-right";
								}
						}
app.results = function(x ,y ){
	
	if(x > 50 && y > 50){
		if(x >  70  && y > 70){
			return "complete";
		}else{
			return "accepted";
		}
	}else{
		return "rejected";
	}

}

app.appmodellist = new app.AppModeList();

//app.appView = new app.AppView();
//app.ss = new app.AppModel({title:'hello web'});
app.vv = new app.newAppView();

