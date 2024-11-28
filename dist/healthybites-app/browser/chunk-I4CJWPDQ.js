import{Fa as y,Ga as U,Ha as me,Ia as le,Ja as ce,_ as F,a as ie,aa as D,b as ae,c as v,d as l,f as x,g as C,ga as G,ha as R,ia as P,j as _,k as se,l as E,la as k,m as S,na as I,oa as A,r as w,s as q,t as M}from"./chunk-QW5BO74H.js";import{b as te,h as oe,i as re,j as h,k as B,n as ne,p as L}from"./chunk-NGZ6S22Z.js";import"./chunk-Q64FFBLU.js";import{Ab as c,Eb as Z,Hb as b,Jb as J,Jc as ee,Ub as n,Wa as s,X as Q,ac as g,ba as m,fa as f,mb as p,oa as W,pa as X,qb as u,ub as d,yb as o,zb as t}from"./chunk-SYLA2I7F.js";import"./chunk-6MDQTQU3.js";var V=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=f({type:r,selectors:[["app-auth-layout"]],standalone:!0,features:[g],decls:4,vars:0,template:function(i,a){i&1&&(c(0,"app-navbar"),o(1,"div"),c(2,"router-outlet"),t(),c(3,"app-footer"))},dependencies:[ie,ae,re]})};function fe(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function ge(r,e){r&1&&(o(0,"mat-error"),n(1,"Introduzca un correo electr\xF3nico v\xE1lido."),t())}function be(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}var z=class r{loginForm;fb=m(w);router=m(h);snackBar=m(y);authService=m(L);CLIENTE_ROL="CLIENTE";NUTRICIONISTA_ROL="NUTRICIONISTA";CLIENTE_ROUTE="/cliente/perfil";NUTRICIONISTA_ROUTE="/nutricionista/gestionar-perfiles/list";DEFAULT_ROUTE="/home";constructor(){this.loginForm=this.fb.group({correo:["",[l.required,l.email]],contrasena:["",[l.required]]})}controlHasError(e,i){return this.loginForm.controls[e].hasError(i)}onSubmit(){if(this.loginForm.invalid)return;let e=this.loginForm.value;this.authService.login(e).subscribe({next:()=>{this.showSnackBar("Inicio de sesi\xF3n exitoso"),this.redirectUserBasedOnRole()},error:()=>{this.showSnackBar("Error en el inicio de sesi\xF3n. Por favor, intenta de nuevo.")}})}redirectUserBasedOnRole(){let e=this.authService.getUserRole();e===this.CLIENTE_ROL?this.router.navigate([this.CLIENTE_ROUTE]):e===this.NUTRICIONISTA_ROL?this.router.navigate([this.NUTRICIONISTA_ROUTE]):this.router.navigate([this.DEFAULT_ROUTE])}showSnackBar(e){this.snackBar.open("Login Successful","Close",{duration:2e3,verticalPosition:"top"})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=f({type:r,selectors:[["app-login"]],standalone:!0,features:[g],decls:26,vars:4,consts:[[1,"login-container"],[1,"login-card"],[1,"login-form"],[3,"ngSubmit","formGroup"],[1,"form-field"],["matInput","","formControlName","correo","type","email","placeholder","Ingrese su correo electr\xF3nico"],["matInput","","formControlName","contrasena","type","password","placeholder","Ingrese su contrase\xF1a"],["mat-raised-button","","color","primary","type","submit",1,"submit-button"],[1,"last"],["routerLink","/auth/reset-password"],["routerLink","/auth/register"]],template:function(i,a){i&1&&(o(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),n(4,"Bienvenid@ a Healthy Bites"),t(),o(5,"form",3),b("ngSubmit",function(){return a.onSubmit()}),o(6,"mat-form-field",4)(7,"mat-label"),n(8,"Correo Electr\xF3nico"),t(),c(9,"input",5),p(10,fe,2,0,"mat-error")(11,ge,2,0,"mat-error"),t(),o(12,"mat-form-field",4)(13,"mat-label"),n(14,"Contrase\xF1a"),t(),c(15,"input",6),p(16,be,2,0,"mat-error"),t(),o(17,"button",7),n(18," Iniciar Sesi\xF3n "),t()(),o(19,"div",8)(20,"a",9),n(21,"Olvid\xE9 la contrase\xF1a"),t(),o(22,"p"),n(23,"\xBFNo tienes cuenta? "),o(24,"a",10),n(25,"Reg\xEDstrate aqu\xED"),t()()()()()()),i&2&&(s(5),u("formGroup",a.loginForm),s(5),d(a.controlHasError("correo","required")?10:-1),s(),d(a.controlHasError("correo","email")?11:-1),s(5),d(a.controlHasError("contrasena","required")?16:-1))},dependencies:[q,_,v,x,C,M,E,S,A,I,k,R,P,G,U,D,F,B],styles:[".login-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;margin:0;box-sizing:border-box}.login-card[_ngcontent-%COMP%]{max-width:1000px;display:flex;flex-direction:row;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px #0000001a}.login-form[_ngcontent-%COMP%]{padding:40px 30px;background-color:#fff}.login-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#1abc9c;font-weight:700;text-align:center;margin-bottom:20px;font-size:2rem}.form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.custom-input[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:8px;padding:10px;width:100%;box-sizing:border-box;margin-bottom:15px}.custom-input[_ngcontent-%COMP%]:focus{outline:none;border-color:#1abc9c;box-shadow:0 0 5px #1abc9c80}.submit-button[_ngcontent-%COMP%]{background-color:#1abc9c!important;color:#fff!important;border:none;border-radius:8px;padding:12px;width:100%;font-weight:700;font-size:1.2rem;box-shadow:0 4px 10px #0003;transition:background-color .3s ease,box-shadow .3s ease}.submit-button[_ngcontent-%COMP%]:hover{background-color:#158467!important}p[_ngcontent-%COMP%]{color:#7f8c8d;text-align:center}a[_ngcontent-%COMP%]{color:#1abc9c;text-decoration:none;text-align:center}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.last[_ngcontent-%COMP%]{margin-top:5px;text-align:center}@media (max-width: 992px){.login-card[_ngcontent-%COMP%]{flex-direction:column;width:90%;max-width:600px}.login-image[_ngcontent-%COMP%]{width:100%;height:200px}.login-form[_ngcontent-%COMP%]{width:100%;padding:20px}}"]})};function he(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function ve(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function xe(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function Ce(r,e){r&1&&(o(0,"mat-error"),n(1,"Introduzca un correo electr\xF3nico v\xE1lido."),t())}function _e(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function Ee(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function Se(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function we(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}var j=class r{registerForm;fb=m(w);router=m(h);snackBar=m(y);authService=m(L);constructor(){this.registerForm=this.fb.group({nombre:["",l.required],apellido:["",l.required],correo:["",[l.required,l.email]],contrasena:["",[l.required,l.minLength(6)]],sexo:["",l.required],edad:["",l.required],altura:["",l.required],peso:["",l.required]})}controlHasError(e,i){return this.registerForm.controls[e].hasError(i)}onSubmit(){if(this.registerForm.valid){let e=this.registerForm.value;this.authService.register(e).subscribe({next:()=>{this.showSnackBar("Usuario creado correctamente"),this.router.navigate(["/auth/login"])},error:i=>{this.showSnackBar(i.error.message)}})}}showSnackBar(e){this.snackBar.open(e,"Cerrar",{duration:5e3})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=f({type:r,selectors:[["app-register"]],standalone:!0,features:[g],decls:65,vars:10,consts:[[1,"form-section","bg-light","register-container"],[1,"text-center"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-6"],[1,"form-field"],["matInput","","formControlName","nombre","type","text","placeholder","Ingrese su nombre"],["matInput","","formControlName","apellido","type","text","placeholder","Ingrese su apellido"],[1,""],["matInput","","formControlName","correo","type","email","placeholder","Ingrese su correo electr\xF3nico"],[1,"mb-3"],["matInput","","formControlName","contrasena","type","password","placeholder","Ingrese su contrase\xF1a"],[1,"mb-3","form-field"],["formControlName","sexo",1,"d-flex"],["value","Masculino",1,"me-3"],["value","Femenino"],["value","Otro"],[1,"row","mb-3"],[1,"col-4"],["matInput","","formControlName","edad","type","number","placeholder","Ingrese su edad"],["matInput","","formControlName","altura","type","number","step","0.01","placeholder","Ingrese su altura"],["matInput","","formControlName","peso","type","number","step","0.01","placeholder","Ingrese su peso"],["mat-raised-button","","type","submit",1,"btn","btn-register","w-100",3,"disabled"],["routerLink","/auth/login"]],template:function(i,a){i&1&&(o(0,"section",0)(1,"h2",1),n(2,"Crear cuenta"),t(),o(3,"form",2),b("ngSubmit",function(){return a.onSubmit()}),o(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),n(8,"Nombre"),t(),c(9,"input",6),p(10,he,2,0,"mat-error"),t()(),o(11,"div",4)(12,"mat-form-field",5)(13,"mat-label"),n(14,"Apellido"),t(),c(15,"input",7),p(16,ve,2,0,"mat-error"),t()()(),o(17,"div",8)(18,"mat-form-field",5)(19,"mat-label"),n(20,"Correo Electr\xF3nico"),t(),c(21,"input",9),p(22,xe,2,0,"mat-error")(23,Ce,2,0,"mat-error"),t()(),o(24,"div",10)(25,"mat-form-field",5)(26,"mat-label"),n(27,"Contrase\xF1a"),t(),c(28,"input",11),p(29,_e,2,0,"mat-error"),t()(),o(30,"div",12)(31,"label"),n(32,"Sexo"),t(),o(33,"mat-radio-group",13)(34,"mat-radio-button",14),n(35,"Masculino"),t(),o(36,"mat-radio-button",15),n(37,"Femenino"),t(),o(38,"mat-radio-button",16),n(39,"Otro"),t()()(),o(40,"div",17)(41,"div",18)(42,"mat-form-field",5)(43,"mat-label"),n(44,"Edad"),t(),c(45,"input",19),p(46,Ee,2,0,"mat-error"),t()(),o(47,"div",18)(48,"mat-form-field",5)(49,"mat-label"),n(50,"Altura (cm)"),t(),c(51,"input",20),p(52,Se,2,0,"mat-error"),t()(),o(53,"div",18)(54,"mat-form-field",5)(55,"mat-label"),n(56,"Peso (kg)"),t(),c(57,"input",21),p(58,we,2,0,"mat-error"),t()()(),o(59,"button",22),n(60," Registrarse "),t()(),o(61,"p"),n(62," \xBFYa tienes cuenta? "),o(63,"a",23),n(64,"Inicia sesi\xF3n aqu\xED"),t()()()),i&2&&(s(3),u("formGroup",a.registerForm),s(7),d(a.controlHasError("nombre","required")?10:-1),s(6),d(a.controlHasError("apellido","required")?16:-1),s(6),d(a.controlHasError("correo","required")?22:-1),s(),d(a.controlHasError("correo","correo")?23:-1),s(6),d(a.controlHasError("contrasena","required")?29:-1),s(17),d(a.controlHasError("edad","required")?46:-1),s(6),d(a.controlHasError("altura","required")?52:-1),s(6),d(a.controlHasError("peso","required")?58:-1),s(),u("disabled",a.registerForm.invalid))},dependencies:[D,F,A,I,k,R,P,G,B,q,_,v,se,x,C,M,E,S,U,ce,me,le],styles:[".register-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.form-section[_ngcontent-%COMP%]{max-width:500px;margin:6.5rem auto;padding:1.5rem;border-radius:10px;background-color:#fff;box-shadow:0 4px 8px #0000001a}.form-control[_ngcontent-%COMP%]{border-radius:20px}.form-field[_ngcontent-%COMP%]{width:100%}.btn-register[_ngcontent-%COMP%]{border-radius:20px;background-color:#1abc9c;color:#fff}p[_ngcontent-%COMP%]{color:#7f8c8d;text-align:center;margin-top:5px}a[_ngcontent-%COMP%]{color:#1abc9c;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}h2[_ngcontent-%COMP%]{color:#1abc9c;font-weight:700;text-align:center;margin-bottom:20px;font-size:2rem}"]})};var O=class r{baseURL=`${ne.baseUrl}/mail`;http=m(te);sendResetPasswordEmail(e){return this.http.post(`${this.baseURL}/sendMail`,e)}checkTokenValidity(e){return this.http.get(`${this.baseURL}/reset/check/${e}`)}resetPassword(e,i){return this.http.post(`${this.baseURL}/reset/${e}`,i)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=Q({token:r,factory:r.\u0275fac,providedIn:"root"})};function Me(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function Fe(r,e){if(r&1){let i=Z();o(0,"form",4),b("ngSubmit",function(){W(i);let N=J();return X(N.onSubmit())}),o(1,"mat-form-field",5)(2,"mat-label"),n(3,"Nueva Contrase\xF1a"),t(),c(4,"input",6),p(5,Me,2,0,"mat-error",7),t(),o(6,"button",8),n(7," Cambiar Contrase\xF1a "),t()()}if(r&2){let i,a=J();u("formGroup",a.resetForm),s(5),u("ngIf",(i=a.resetForm.get("password"))==null?null:i.hasError("required")),s(),u("disabled",a.resetForm.invalid)}}var $=class r{resetForm;tokenValid=!1;fb=m(w);router=m(h);route=m(oe);snackBar=m(y);passwordResetService=m(O);constructor(){this.resetForm=this.fb.group({password:["",[l.required]]})}ngOnInit(){let e=this.route.snapshot.params.token;localStorage.setItem("resetToken",e),this.checkToken()}onSubmit(){if(this.resetForm.invalid)return;let e=this.resetForm.value.password,i=localStorage.getItem("resetToken");i&&this.passwordResetService.resetPassword(i,e).subscribe({next:()=>{this.snackBar.open("Contrase\xF1a cambiada correctamente.","Cerrar",{duration:3e3}),localStorage.removeItem("resetToken"),this.router.navigate(["/auth/login"])},error:()=>{this.snackBar.open("Error al cambiar la contrase\xF1a. Por favor, intenta de nuevo.","Cerrar",{duration:3e3})}})}showSnackBar(e){this.snackBar.open(e,"Cerrar",{duration:3e3,verticalPosition:"top"})}checkToken(){let e=localStorage.getItem("resetToken");e&&this.passwordResetService.checkTokenValidity(e).subscribe({next:i=>{this.tokenValid=i,this.tokenValid||(this.snackBar.open("El enlace ha expirado. Por favor, solicita un nuevo enlace.","Cerrar",{duration:3e3}),this.router.navigate(["/auth/reset-password"]))},error:()=>{this.snackBar.open("Error al verificar el enlace. Por favor, intenta de nuevo.","Cerrar",{duration:3e3}),this.router.navigate(["/auth/reset-password"])}})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=f({type:r,selectors:[["app-reset-password"]],standalone:!0,features:[g],decls:5,vars:1,consts:[[1,"password-reset-container"],[1,"reset-container"],[1,"reset-header"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"ngSubmit","formGroup"],["appearance","outline",1,"form-input"],["matInput","","formControlName","password","type","password","placeholder","Introduce tu nueva contrase\xF1a"],[4,"ngIf"],["mat-raised-button","","color","primary","type","submit",1,"submit-button",3,"disabled"]],template:function(i,a){i&1&&(o(0,"div",0)(1,"div",1)(2,"h2",2),n(3,"Cambiar Contrase\xF1a"),t(),p(4,Fe,8,3,"form",3),t()()),i&2&&(s(4),u("ngIf",a.tokenValid))},dependencies:[M,_,v,x,C,E,S,k,R,I,P,F,ee],styles:[".password-reset-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;margin:0;box-sizing:border-box}.reset-container[_ngcontent-%COMP%]{max-width:500px;width:100%;padding:40px 30px;background-color:#fff;border-radius:12px;box-shadow:0 4px 12px #0000001a}.reset-header[_ngcontent-%COMP%]{color:#1abc9c;font-weight:700;text-align:center;margin-bottom:20px;font-size:2rem}.form-input[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.submit-button[_ngcontent-%COMP%]{background-color:#1abc9c!important;color:#fff!important;border:none;border-radius:8px;padding:12px;width:100%;font-weight:700;font-size:1.2rem;box-shadow:0 4px 10px #0003;transition:background-color .3s ease,box-shadow .3s ease}.submit-button[_ngcontent-%COMP%]:hover{background-color:#158467!important}@media (max-width: 992px){.reset-container[_ngcontent-%COMP%]{width:90%;padding:20px}}"]})};function Re(r,e){r&1&&(o(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function Pe(r,e){r&1&&(o(0,"mat-error"),n(1,"Introduce un correo v\xE1lido"),t())}var Y=class r{resetForm;fb=m(w);router=m(h);snackBar=m(y);passwordResetService=m(O);constructor(){this.resetForm=this.fb.group({email:["",[l.required,l.email]]})}controlHasError(e,i){return this.resetForm.controls[e].hasError(i)}onSubmit(){if(this.resetForm.invalid)return;let e=this.resetForm.value.email;this.passwordResetService.sendResetPasswordEmail(e).subscribe({next:()=>{this.showSnackBar("Si el correo est\xE1 registrado, recibir\xE1s un enlace para restablecer la contrase\xF1a")},error:()=>{this.showSnackBar("Error al enviar el correo. Int\xE9ntalo nuevamente")}})}showSnackBar(e){this.snackBar.open(e,"Cerrar",{duration:3e3,verticalPosition:"top"})}goToLogin(){this.router.navigate(["/auth/login"])}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=f({type:r,selectors:[["app-reset-password"]],standalone:!0,features:[g],decls:17,vars:4,consts:[[1,"main-container"],[1,"reset-container"],[1,"reset-header"],[1,"reset-form",3,"ngSubmit","formGroup"],[1,"form-group"],["appearance","outline",1,"form-input"],["matInput","","formControlName","email","placeholder","Introduce tu correo"],["mat-raised-button","","color","primary","type","submit",1,"submit-button",3,"disabled"],[1,"back-to-login"],["mat-button","","color","accent",3,"click"]],template:function(i,a){i&1&&(o(0,"div",0)(1,"div",1)(2,"h2",2),n(3,"Recuperar Contrase\xF1a"),t(),o(4,"form",3),b("ngSubmit",function(){return a.onSubmit()}),o(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),n(8,"Correo Electr\xF3nico"),t(),c(9,"input",6),p(10,Re,2,0,"mat-error")(11,Pe,2,0,"mat-error"),t()(),o(12,"button",7),n(13,"Enviar Correo"),t()(),o(14,"p",8)(15,"button",9),b("click",function(){return a.goToLogin()}),n(16,"Regresar"),t()()()()),i&2&&(s(4),u("formGroup",a.resetForm),s(6),d(a.controlHasError("email","required")?10:-1),s(),d(a.controlHasError("email","email")?11:-1),s(),u("disabled",a.resetForm.invalid))},dependencies:[M,_,v,x,C,E,S,k,R,I,P,F],styles:[".main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;margin:0;box-sizing:border-box}.reset-container[_ngcontent-%COMP%]{max-width:500px;width:100%;padding:40px 30px;background-color:#fff;border-radius:12px;box-shadow:0 4px 12px #0000001a}.reset-header[_ngcontent-%COMP%]{color:#1abc9c;font-weight:700;text-align:center;margin-bottom:20px;font-size:2rem}.form-input[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.submit-button[_ngcontent-%COMP%]{background-color:#1abc9c!important;color:#fff!important;border:none;border-radius:8px;padding:12px;width:100%;font-weight:700;font-size:1.2rem;box-shadow:0 4px 10px #0003;transition:background-color .3s ease,box-shadow .3s ease}.submit-button[_ngcontent-%COMP%]:hover{background-color:#158467!important}.back-to-login[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.back-to-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#1abc9c}@media (max-width: 992px){.reset-container[_ngcontent-%COMP%]{width:90%;padding:20px}}"]})};var Gt=[{path:"",component:V,children:[{path:"login",component:z},{path:"register",component:j},{path:"reset-password",component:Y},{path:"reset-password/:token",component:$}]}];export{Gt as authRoutes};
