(this.webpackJsonpaploutWidget=this.webpackJsonpaploutWidget||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(2),i=a.n(s),n=a(11),c=a.n(n),r=a(8),l=a.n(r),o=a(7),d=a(9),u=a(3),h=a(4),m=a(1),j=a(6),b=a(5),p=(a(17),a(18),a(19),a(20),a(0)),k=function(t){var e=Array(t.countStars).fill(0),a=Math.ceil(t.rating);return Object(p.jsx)("div",{className:"rating",children:Object(p.jsx)("div",{className:"stars",children:e.map((function(e,s){var i=s<a?"stars__item_on":"stars__item_off";return s+1!==a||Number.isInteger(t.rating)?Object(p.jsx)("div",{className:"stars__item ".concat(i)},s):Object(p.jsx)("div",{className:"stars__item stars__item_half"},s)}))})})},v=function(t){return Object(p.jsxs)("div",{className:"rating",children:[Object(p.jsx)("span",{className:"rating__value",children:t.data.product.rating}),Object(p.jsx)(k,{rating:t.data.product.rating,countStars:t.countStars}),Object(p.jsxs)("p",{className:"recommends",children:["\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435",Object(p.jsxs)("span",{className:"recommends__count",children:[" ",t.data.product.reviews_count," \u043e\u0446\u0435\u043d\u043e\u043a"]})]})]})},_=(a(22),a(23),function(t){return Object(p.jsx)("section",{className:"photo",children:Object(p.jsx)("ul",{className:"slider",children:t.data.product.picture_urls.map((function(e,a){return Object(p.jsx)("li",{className:"slider__item",children:Object(p.jsx)("img",{className:"slider__image",src:e,alt:t.data.product.name})},a)}))})})}),f=(a(24),a(25),function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(t){var s;return Object(u.a)(this,a),(s=e.call(this,t)).state={selected:"",allReviews:[]},s.handleChange=s.handleChange.bind(Object(m.a)(s)),s.getAllReviewsFromApi=s.getAllReviewsFromApi.bind(Object(m.a)(s)),s}return Object(h.a)(a,[{key:"handleChange",value:function(t){this.setState({selected:t.target.value});var e=Object(o.a)(this.state.allReviews),a=[];a="new"===t.target.value?e.sort((function(t,e){return new Date(e.created_at)-new Date(t.created_at)})):e.sort((function(t,e){return new Date(t.created_at)-new Date(e.created_at)})),this.props.sortReviews(a)}},{key:"getAllReviewsFromApi",value:function(){var t=Object(d.a)(l.a.mark((function t(){var e,a,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=1;case 1:if(!(e<this.props.data.meta.total_pages)){t.next=15;break}return a="https://w-api2.aplaut.io/widgets/v2/render.json?authentication_token=56fa337b8ddf870c76021a5f&context=product&context_id=10350209&theme_id=default&widget_id=product-reviews&page=".concat(e),t.next=5,fetch(a);case 5:if(s=t.sent,i={},!s.ok){t.next=11;break}return t.next=10,s.json();case 10:i=t.sent;case 11:this.setState({allReviews:[].concat(Object(o.a)(this.state.allReviews),Object(o.a)(i.reviews))});case 12:e++,t.next=1;break;case 15:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getAllReviewsFromApi()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"filter-comments",children:[Object(p.jsx)("p",{className:"filter-comments__title",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c:"}),Object(p.jsxs)("select",{className:"filter-comments__choice",value:this.state.selected,onChange:this.handleChange,children:[Object(p.jsx)("option",{value:"new",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u043e\u0432\u044b\u0435"}),Object(p.jsx)("option",{value:"old",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0442\u0430\u0440\u044b\u0435"})]})]})}}]),a}(s.Component)),O=(a(26),a(27),function(t){return new Date(t).toLocaleDateString("ru",{day:"numeric",month:"long",year:"numeric"})}),g=function(t){var e=null;return t.data.author.details&&(e=t.data.author.details.find((function(t){return"\u0421\u0440\u043e\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"===t.label}))),Object(p.jsxs)("header",{className:"comment__header",children:[Object(p.jsxs)("div",{className:"author",children:[Object(p.jsx)("p",{className:"author__name",children:t.data.author.name}),Object(p.jsxs)("div",{className:"author__rating-detail",children:[Object(p.jsx)(k,{rating:t.data.rating,countStars:t.countStars}),Object(p.jsx)("p",{className:"author__detail",children:e?"".concat(e.label,": ").concat(e.value):null})]})]}),Object(p.jsx)("p",{className:"comment__date",children:O(t.data.created_at)})]})},C=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(t){var s;return Object(u.a)(this,a),(s=e.call(this,t)).state={likesCount:s.props.data.likes,dislikesCount:s.props.data.dislikes,isLikeClicked:!1,isDislikeClicked:!1},s.likesHandleClick=s.likesHandleClick.bind(Object(m.a)(s)),s.dislikesHandleClick=s.dislikesHandleClick.bind(Object(m.a)(s)),s}return Object(h.a)(a,[{key:"likesHandleClick",value:function(){if(this.setState({isLikeClicked:!this.state.isLikeClicked}),this.state.isLikeClicked||this.state.isDislikeClicked){if(this.state.isDislikeClicked)return null;this.setState({likesCount:this.state.likesCount-1})}else this.setState({likesCount:this.state.likesCount+1})}},{key:"dislikesHandleClick",value:function(){if(this.setState({isDislikeClicked:!this.state.isDislikeClicked}),this.state.isDislikeClicked||this.state.isLikeClicked){if(this.state.isLikeClicked)return null;this.setState({dislikesCount:this.state.dislikesCount-1})}else this.setState({dislikesCount:this.state.dislikesCount+1})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"comment__body",children:[Object(p.jsx)("p",{className:"comment__review",children:this.props.data.body}),Object(p.jsxs)("div",{className:"comment__btns",children:[Object(p.jsx)("button",{className:"comment__btn comment__btn_like \n            ".concat(this.state.isLikeClicked?"comment__btn_liked":""),onClick:this.state.isDislikeClicked?null:this.likesHandleClick,children:this.state.likesCount}),Object(p.jsx)("button",{className:"comment__btn comment__btn_dislike \n            ".concat(this.state.isDislikeClicked?"comment__btn_disliked":""),onClick:this.state.isLikeClicked?null:this.dislikesHandleClick,children:this.state.dislikesCount})]})]})}}]),a}(s.Component),x=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(t){var s;return Object(u.a)(this,a),(s=e.call(this,t)).state={setNewKey:!1,currentPage:1,perPage:s.props.data.meta.per_page},s.loadCommentMore=s.loadCommentMore.bind(Object(m.a)(s)),s}return Object(h.a)(a,[{key:"loadCommentMore",value:function(t){t.preventDefault(),this.props.loadComments("isClicked"),this.setState({setNewKey:!0,currentPage:this.state.currentPage+1,perPage:this.state.perPage+this.props.data.meta.per_page})}},{key:"render",value:function(){var t=this;return Object(p.jsxs)("section",{className:"comment",children:[this.props.sortReviews?this.props.sortReviews.slice(0,this.state.perPage).map((function(e,a){return Object(p.jsxs)("div",{className:"comment__item",children:[Object(p.jsx)(g,{data:e,countStars:t.props.countStars}),Object(p.jsx)(C,{data:e})]},t.state.setNewKey?e.id+a.toString():e.id)})):this.props.reviews.slice(0,this.state.perPage).map((function(e,a){return Object(p.jsxs)("div",{className:"comment__item",children:[Object(p.jsx)(g,{data:e,countStars:t.props.countStars}),Object(p.jsx)(C,{data:e})]},t.state.setNewKey?e.id+a.toString():e.id)})),this.state.currentPage<this.props.data.meta.total_pages?Object(p.jsx)("button",{className:"comment__more",onClick:this.loadCommentMore,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"}):null]})}}]),a}(s.Component),w=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(t){var s;return Object(u.a)(this,a),(s=e.call(this,t)).countStars=5,s.state={data:null,totalPage:null,currentPage:1,reviews:[],sortReviewsDate:null},s.getDataFromApi=s.getDataFromApi.bind(Object(m.a)(s)),s.addMoreComments=s.addMoreComments.bind(Object(m.a)(s)),s.sortReviewsHandle=s.sortReviewsHandle.bind(Object(m.a)(s)),s}return Object(h.a)(a,[{key:"getDataFromApi",value:function(){var t=Object(d.a)(l.a.mark((function t(){var e,a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://w-api2.aplaut.io/widgets/v2/render.json?authentication_token=56fa337b8ddf870c76021a5f&context=product&context_id=10350209&theme_id=default&widget_id=product-reviews&page=".concat(this.state.currentPage),t.next=3,fetch(e);case 3:if(a=t.sent,s={},!a.ok){t.next=9;break}return t.next=8,a.json();case 8:s=t.sent;case 9:this.setState({data:s,totalPage:s.meta.total_pages,currentPage:this.state.currentPage+1,reviews:[].concat(Object(o.a)(this.state.reviews),Object(o.a)(s.reviews))});case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"addMoreComments",value:function(t){t&&this.getDataFromApi()}},{key:"sortReviewsHandle",value:function(t){this.setState({sortReviewsDate:Object(o.a)(t)})}},{key:"componentDidMount",value:function(){this.getDataFromApi()}},{key:"render",value:function(){return Object(p.jsxs)("section",{className:"widget",children:[Object(p.jsxs)("header",{className:"widget__header",children:[this.state.data&&Object(p.jsx)(v,{data:this.state.data,countStars:this.countStars}),Object(p.jsx)("button",{className:"widget__write",children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043e\u0442\u0437\u044b\u0432"})]}),this.state.data&&Object(p.jsx)(_,{data:this.state.data}),this.state.data&&Object(p.jsx)(f,{data:this.state.data,sortReviews:this.sortReviewsHandle}),this.state.data&&Object(p.jsx)(x,{data:this.state.data,reviews:this.state.reviews,sortReviews:this.state.sortReviewsDate,countStars:this.countStars,loadComments:this.addMoreComments})]})}}]),a}(s.Component),N=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(e){var a=e.getCLS,s=e.getFID,i=e.getFCP,n=e.getLCP,c=e.getTTFB;a(t),s(t),i(t),n(t),c(t)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("app")),N()}],[[28,1,2]]]);
//# sourceMappingURL=main.f14bd5db.chunk.js.map