import{l as d,V as m}from"./VForm-a71d4bad.js";import{o as u,c,w as o,a,e as l,f as p,b as f}from"./index-8c6bff69.js";import{_ as V}from"./tag-6b6e78a9.js";import{V as b}from"./VSheet-6232ea88.js";import{V as i}from"./VTextField-3a4d16c3.js";import{V as n}from"./index-5d17a272.js";import"./AxiosConfig-97229929.js";import"./index-c86a9895.js";const g={data:()=>({email:"",emailRules:[e=>!!e||"El correo electrónico es requerido.",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||"Ingresa un correo electrónico válido."],password:"",passwordRules:[e=>!!e||"La contraseña es requerida.",e=>e&&e.length>=8||"La contraseña debe tener al menos 8 caracteres."]}),computed:{},methods:{async submitForm(e){await d({email:this.email,password:this.password}),this.$router.push({path:"/app"})},goToRegister(){this.$router.push({path:"/signIn"})}}},w=f("h1",{class:"text-center mb-11"},"¡Iniciar Sesión!",-1);function h(e,s,k,R,C,t){return u(),c(b,{width:"330",class:"mx-auto"},{default:o(()=>[a(m,{"fast-fail":"",onSubmit:p(t.submitForm,["prevent"])},{default:o(()=>[w,a(i,{class:"mb-2",modelValue:e.email,"onUpdate:modelValue":s[0]||(s[0]=r=>e.email=r),label:"Correo electrónico",rules:e.emailRules,clearable:"",variant:"outlined"},null,8,["modelValue","rules"]),a(i,{modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=r=>e.password=r),label:"Contraseña",type:"password",rules:e.passwordRules,required:"",clearable:"",variant:"outlined"},null,8,["modelValue","rules"]),a(n,{block:"",class:"mt-6",color:"yellow-accent-4",rounded:"lg",size:"large",onClick:t.goToRegister},{default:o(()=>[l(" Ir a registro ")]),_:1},8,["onClick"]),a(n,{type:"submit",block:"",class:"mt-6",color:"blue-accent-3",rounded:"lg",size:"large"},{default:o(()=>[l(" Inicio de sesion ")]),_:1})]),_:1},8,["onSubmit"])]),_:1})}const q=V(g,[["render",h]]);export{q as default};
