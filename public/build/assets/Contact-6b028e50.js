import{a as o}from"./AppLayout-7406cad0.js";import{b as i}from"./app-8db2a1b1.js";import{n}from"./_plugin-vue2_normalizer-2bbd088e.js";const l={name:"Contact",components:{appLayout:o},data:()=>({dialog:!1,message:{name:"",email:"",subject:"",content:""},links:[{text:"Inicio",disabled:!1,href:"/"},{text:"Contacto",disabled:!0,href:"/contact"}],contact:[{icon:"mdi-map-marker-outline",name:"Dirección",content:"Cra 4-A # 54-52<br />Chapinero Alto, Bogotá, Colombia"},{icon:"mdi-cellphone",name:"Teléfonos",content:"+57 315 734 0385"},{icon:"mdi-email",name:"Correos",content:"contacto@mvictoriaaponte.co"}]}),methods:{enviar(){if(this.dialog=!0,this.message.name.trim()===""||this.message.content.trim()===""){alert("Debes completar todos los campos antes de guardar");return}const s=this.message;i.post("/message",s).then(t=>{t.status===200?(console.log(t),console.log(t.data),this.dialog=!1,this.message={name:"",email:"",subject:"",content:""},Swal.fire("Buen trabajo","Mensaje enviado con éxito!","success")):(Swal.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>"}),console.log(t.data),this.dialog=!1)}).catch(t=>{Swal.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>"}),console.log(t),this.dialog=!1})}}};var r=function(){var t=this,e=t._self._c;return e("app-layout",[e("div",[e("section",[e("v-img",{attrs:{src:"/src/images/header/contact-us.jpg",gradient:"to top, rgba(5, 11, 31, 0.8), rgba(5, 11, 31, 0.8)",color:"#45516b",flat:"",tile:"",height:"350","max-width":"100%"}},[e("v-row",{staticClass:"ma-0 fill-height text-center align-center justify-center"},[e("v-col",{staticClass:"col col-12"},[e("h1",{staticClass:"display-2 font-weight-500 mb-2 text-center white--text"},[t._v(" Contacto ")]),e("v-divider",{staticClass:"primary mx-auto mb-6",staticStyle:{"max-width":"28px"}}),e("v-breadcrumbs",{staticClass:"justify-center pa-0",attrs:{dark:"",items:t.links}})],1)],1)],1)],1),e("section",{staticClass:"mt-12"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"6"}},[e("h3",{staticClass:"text-uppercase primary--text title font-weight-bold mb-1 text-left mb-4"},[t._v(" MANTENTE EN CONTACTO CON NOSOTROS ")]),e("p",{staticClass:"base-body body-1 grey--text text--darken-1 text-left mb-6 text-justify"},[t._v(" Si quieres saber mas de lo que hacemos y como podemos ayudarte, no dudes en escribirnos a nuestros correos electrónicos o llamar a cualquiera de los números telefónicos que tenemos disponibles para ti. Para nosotros es un placer poder servirte. ")]),t._l(t.contact,function(a){return e("div",{key:a.name,staticClass:"pt-2 mb-0 d-flex justify-start align-content-start align-start"},[e("div",{staticClass:"base-avatar d-inline-flex mb-3",staticStyle:{"margin-left":"-10"}},[e("v-icon",{staticClass:"mt-6",attrs:{color:"primary",size:"32"},domProps:{textContent:t._s(a.icon)}})],1),e("div",{staticClass:"ml-3"},[e("h3",{staticClass:"text-uppercase font-weight-black subtitle-2 mb-1 text-left primary--text"},[t._v(" "+t._s(a.name)+" ")]),e("div",{staticClass:"base-body body-1 mx-auto text--lighten-1 text-left mb-0"},[e("div",{domProps:{innerHTML:t._s(a.content)}})])])])})],2),e("v-col",{attrs:{cols:"12",md:"6"}},[e("h3",{staticClass:"text-uppercase title primary--text font-weight-bold mb-1 text-left mb-4"},[t._v(" Envíanos un correo electrónico ")]),e("v-form",[e("div",[e("div",[e("v-text-field",{attrs:{label:"Nombre",outlined:""},model:{value:t.message.name,callback:function(a){t.$set(t.message,"name",a)},expression:"message.name"}}),e("v-text-field",{attrs:{small:"",label:"Correo",outlined:"",type:"email"},model:{value:t.message.email,callback:function(a){t.$set(t.message,"email",a)},expression:"message.email"}}),e("v-text-field",{attrs:{outlined:"",label:"Tema"},model:{value:t.message.subject,callback:function(a){t.$set(t.message,"subject",a)},expression:"message.subject"}}),e("v-textarea",{attrs:{outlined:"",label:"Descripción o Mensaje"},model:{value:t.message.content,callback:function(a){t.$set(t.message,"content",a)},expression:"message.content"}}),e("v-btn",{staticClass:"white--text",attrs:{disabled:t.dialog,loading:t.dialog,color:"primary",outlined:"",dark:""},on:{click:function(a){return t.enviar()}}},[t._v(" Enviar ")])],1)])])],1)],1)],1),e("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",{attrs:{color:"primary",dark:""}},[e("v-card-text",{staticClass:"pa-4"},[e("p",{staticClass:"mb-2"},[t._v("Por favor espere")]),e("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)])])},c=[],m=n(l,r,c,!1,null,"8bd5be7d",null,null);const g=m.exports;export{g as default};
