"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[970],{6970:(V,m,l)=>{l.r(m),l.d(m,{BandModule:()=>z});var u=l(6814),c=l(9310),h=l(3860),e=l(4946),_=l(5731),p=l(4588),x=l(4409);function v(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",13)(1,"div",14)(2,"ul",15)(3,"li",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.showSide=!1)}),e._uU(4,"Home"),e.qZA(),e.TgZ(5,"li",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.showSide=!1)}),e._uU(6,"Songs"),e.qZA(),e.TgZ(7,"li",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.showSide=!1)}),e._uU(8,"Add Songs"),e.qZA(),e.TgZ(9,"li",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.showSide=!1)}),e._uU(10,"Manage Members"),e.qZA(),e.TgZ(11,"li",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.showSide=!1)}),e._uU(12,"Profile"),e.qZA(),e.TgZ(13,"li",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.logout())}),e._uU(14,"Logout"),e.qZA()()()()}2&i&&(e.xp6(3),e.Q6J("routerLink","/band/home"),e.xp6(2),e.Q6J("routerLink","/band/songs"),e.xp6(2),e.Q6J("routerLink","/band/addSongs"),e.xp6(2),e.Q6J("routerLink","/band/manageMembers"),e.xp6(2),e.Q6J("routerLink","/band/profile"))}let Z=(()=>{class i{constructor(t,n,o,r){this.router=t,this.commonServ=n,this.sharedServ=o,this.chatServ=r,this.showSide=!1}showSideBar(){this.showSide=!this.showSide}logout(){localStorage.clear(),this.router.navigate(["/login"]),this.showSide=!1,this.commonServ.toggleToken$.next(!1),this.chatServ.socket.disconnect()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(c.F0),e.Y36(_.v),e.Y36(p.B),e.Y36(x.$))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-band-navbar"]],decls:32,vars:9,consts:[[1,"bg-gray-800","py-4","text-white"],[1,"flex","justify-between","items-center","mx-auto","px-4"],[1,"cursor-pointer","text-white","text-lg","font-bold"],[1,"flex","md:hidden"],["src","../../../../../../assets/images/more.png","alt","",1,"h-10",3,"click"],["class","bg-black bg-opacity-50 w-screen translate-y-36 -translate-x-4 absolute md:hidden",4,"ngIf"],[1,"md:flex","hidden"],[1,"cursor-pointer","text-white","hover:text-gray-300","px-3","py-2",3,"routerLink"],[1,"cursor-pointer","text-white","hover:text-gray-300","px-3","py-2",3,"click"],[1,"bg-white","text-black","flex","justify-evenly","items-center","fixed","bottom-0","left-0","w-full","h-16","sm:hidden"],["src","../../../../../assets/images/home.png",1,"h-5","w-5","hover:-translate-y-1","cursor-pointer","transition","text-lg",3,"routerLink","click"],["src","../../../../../assets/images/icons8-music-48.png",1,"h-7","w-7","hover:-translate-y-1","cursor-pointer","transition","text-lg",3,"routerLink","click"],["src","../../../../../assets/images/settings.png",1,"h-5","w-5","hover:-translate-y-1","cursor-pointer","transition","text-lg",3,"routerLink","click"],[1,"bg-black","bg-opacity-50","w-screen","translate-y-36","-translate-x-4","absolute","md:hidden"],[1,""],[1,"text-center","mt-2","space-y-2"],[1,"hover:-translate-y-1","cursor-pointer","transition","text-lg",3,"routerLink","click"],[1,"hover:-translate-y-1","cursor-pointer","transition","text-lg",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"nav",0)(1,"ul",1)(2,"div")(3,"li")(4,"a",2),e._uU(5,"Band Name"),e.qZA()()(),e.TgZ(6,"div",3)(7,"img",4),e.NdJ("click",function(){return o.showSideBar()}),e.qZA()(),e.YNc(8,v,15,5,"div",5),e.TgZ(9,"div",6)(10,"li")(11,"a",7),e._uU(12,"Home"),e.qZA()(),e.TgZ(13,"li")(14,"a",7),e._uU(15,"Songs"),e.qZA()(),e.TgZ(16,"li")(17,"a",7),e._uU(18,"Add Songs"),e.qZA()(),e.TgZ(19,"li")(20,"a",7),e._uU(21,"Manage Members"),e.qZA()(),e.TgZ(22,"li")(23,"a",7),e._uU(24,"Profile"),e.qZA()(),e.TgZ(25,"li")(26,"a",8),e.NdJ("click",function(){return o.logout()}),e._uU(27,"Logout"),e.qZA()()()(),e.TgZ(28,"div",9)(29,"img",10),e.NdJ("click",function(){return o.showSide=!1}),e.qZA(),e.TgZ(30,"img",11),e.NdJ("click",function(){return o.showSide=!1}),e.qZA(),e.TgZ(31,"img",12),e.NdJ("click",function(){return o.showSide=!1}),e.qZA()()()),2&n&&(e.xp6(8),e.Q6J("ngIf",o.showSide),e.xp6(3),e.Q6J("routerLink","/band/home"),e.xp6(3),e.Q6J("routerLink","/band/songs"),e.xp6(3),e.Q6J("routerLink","/band/addSongs"),e.xp6(3),e.Q6J("routerLink","/band/manageMembers"),e.xp6(3),e.Q6J("routerLink","/band/profile"),e.xp6(6),e.Q6J("routerLink","/band/home"),e.xp6(1),e.Q6J("routerLink","/band/songs"),e.xp6(1),e.Q6J("routerLink","/band/manageMembers"))},dependencies:[u.O5,c.rH]})}return i})(),T=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-band"]],decls:3,vars:0,consts:[[1,"h-[440px]","overflow-auto"]],template:function(n,o){1&n&&(e._UZ(0,"app-band-navbar"),e.TgZ(1,"div",0),e._UZ(2,"router-outlet"),e.qZA())},dependencies:[c.lC,Z]})}return i})();var b=l(7394),w=l(553),S=l(9862);let g=(()=>{class i{constructor(t){this.http=t,this.bandApi=`${w.N.apiUrl}/band`}bandGetHome(){return this.http.get(`${this.bandApi}/home`)}bandAddSong(t){return this.http.post(`${this.bandApi}/addSong`,t)}bandGetMembers(){return this.http.get(`${this.bandApi}/getBandMembers`)}removeBandMember(t){return this.http.patch(`${this.bandApi}/removeFromBand`,{userId:t})}searchArtist(t){return this.http.get(`${this.bandApi}/search/${t}`)}addBandMember(t){return this.http.patch(`${this.bandApi}/addToBand`,{artistId:t})}getBandSongs(){return this.http.get(`${this.bandApi}/songs`)}getBandSingleSong(t){return this.http.get(`${this.bandApi}/getSong/${t}`)}bandEditSong(t,n){return this.http.patch(`${this.bandApi}/editSong/${n}`,{data:t})}bandAddProfile(t){return this.http.post(`${this.bandApi}/addProfile`,t)}bandGetProfile(){return this.http.get(`${this.bandApi}/getProfile`)}static#e=this.\u0275fac=function(n){return new(n||i)(e.LFG(S.eN))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),A=(()=>{class i{constructor(t){this.bandServ=t,this.bandHome$=new b.w0,this.isBandAdmin=!!localStorage.getItem("isInBand")}ngOnInit(){this.getBandDetails()}getBandDetails(){this.bandHome$=this.bandServ.bandGetHome().subscribe({next:t=>{this.bandDetails=t[0]},error:t=>{alert(t.error.message)}})}ngOnDestroy(){this.bandHome$.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(g))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-band-home"]],decls:3,vars:1,consts:[[1,"text-center","mt-10"],[1,"text-4xl","font-bold","gradient-text","mb-6"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2),e.qZA()()),2&n&&(e.xp6(2),e.hij("Welcome, ",null==o.bandDetails||null==o.bandDetails.band[0]?null:o.bandDetails.band[0].bandName,""))},styles:[".container[_ngcontent-%COMP%]{width:50%;height:50%}.gradient-text[_ngcontent-%COMP%]{background-image:linear-gradient(to right,#7177c1,#ff0048);-webkit-background-clip:text;background-clip:text;color:transparent}"]})}return i})();var s=l(95);let y=(()=>{class i{constructor(t,n,o){this.formBuilder=t,this.bandServ=n,this.router=o,this.formData=new FormData}ngOnInit(){this.initForm(),this.bandGetProfile()}bandGetProfile(){this.bandServ.bandGetProfile().subscribe({next:t=>{this.bandProfile=t[0],this.bandProfile&&this.bandProfileForm.patchValue({bandName:this.bandProfile?.bandName,bandBio:this.bandProfile?.bandBio,bandLocation:this.bandProfile?.bandLocation})},error:t=>{alert(t.error.message)}})}initForm(){this.bandProfileForm=this.formBuilder.group({bandName:[""],bandBio:[""],bandLocation:[""],bandImage:[null]})}submitForm(){if(this.bandProfileForm.valid){const t=this.bandProfileForm.value;this.formData.append("bandName",t.bandName),this.formData.append("bandBio",t.bandBio),this.formData.append("bandLocation",t.bandLocation),this.formData.append("bandImage",t.bandImage),this.bandServ.bandAddProfile(this.formData).subscribe({next:n=>{},error:n=>{alert(n.error.message)}}),this.router.navigate(["/band/home"])}}onFileSelected(t){this.bandProfileForm.patchValue({bandImage:t.target.files[0]})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(s.qu),e.Y36(g),e.Y36(c.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-band-profile"]],decls:19,vars:2,consts:[[3,"formGroup","ngSubmit"],[1,"mb-4"],["for","bandName",1,"block","text-sm","font-bold","mb-2"],["formControlName","bandName","type","text","id","bandName","name","bandName",1,"w-full","px-3","py-2","border","rounded-md"],["for","bandImage",1,"block","text-sm","font-bold","mb-2"],["type","file","id","bandImage","accept","image/*","name","bandImage",1,"w-full","px-3","py-2","border","rounded-md",3,"change"],["for","bandBio",1,"block","text-sm","font-bold","mb-2"],["formControlName","bandBio","id","bandBio","name","bandBio",1,"w-full","px-3","py-2","border","rounded-md"],["for","bandLocation",1,"block","text-sm","font-bold","mb-2"],["formControlName","bandLocation","type","text","id","bandLocation","name","bandLocation",1,"w-full","px-3","py-2","border","rounded-md"],["type","submit",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded",3,"disabled"]],template:function(n,o){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.submitForm()}),e.TgZ(1,"div",1)(2,"label",2),e._uU(3,"Band Name"),e.qZA(),e._UZ(4,"input",3),e.qZA(),e.TgZ(5,"div",1)(6,"label",4),e._uU(7,"Band Image"),e.qZA(),e.TgZ(8,"input",5),e.NdJ("change",function(a){return o.onFileSelected(a)}),e.qZA()(),e.TgZ(9,"div",1)(10,"label",6),e._uU(11,"Band Bio"),e.qZA(),e._UZ(12,"textarea",7),e.qZA(),e.TgZ(13,"div",1)(14,"label",8),e._uU(15,"Band Location"),e.qZA(),e._UZ(16,"input",9),e.qZA(),e.TgZ(17,"button",10),e._uU(18,"Submit"),e.qZA()()),2&n&&(e.Q6J("formGroup",o.bandProfileForm),e.xp6(17),e.Q6J("disabled",!o.bandProfileForm.valid))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]})}return i})();function C(i,d){1&i&&(e.TgZ(0,"div",25),e._uU(1,"Song file is required"),e.qZA())}function k(i,d){1&i&&(e.TgZ(0,"div",25),e._uU(1,"Title is required"),e.qZA())}function B(i,d){if(1&i&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.reqMsg)}}function M(i,d){1&i&&(e.TgZ(0,"button",26),e._uU(1,"Add Song"),e.qZA())}function q(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.updateSong(o.songDetails._id))}),e._uU(1,"update Song"),e.qZA()}}function N(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",28)(1,"div",29)(2,"h2",30),e._uU(3),e.qZA(),e.TgZ(4,"p",31),e._uU(5),e.qZA(),e.TgZ(6,"button",32),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.goBack())}),e._uU(7,"Close"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(3),e.Oqu(t.message),e.xp6(2),e.Oqu(t.description)}}let f=(()=>{class i{constructor(t,n,o,r){this.formBuilder=t,this.bandServ=n,this.router=o,this.route=r,this.formData=new FormData,this.addSong$=new b.w0}ngOnInit(){this.route.params.subscribe(t=>{this.songId=t.id}),this.songId&&this.bandServ.getBandSingleSong(this.songId).subscribe({next:t=>{this.songDetails=t,this.songDetails&&this.setSongFormValues(this.songDetails)},error:t=>{alert(t.error.message)}}),this.songForm=this.formBuilder.group({title:["",s.kI.required],album:[""],genre:["",s.kI.required],duration:[""],releaseDate:[""],songFile:["",s.kI.required]}),this.songId&&(this.songForm.get("songFile")?.disable(),this.songForm.get("releaseDate")?.disable())}setSongFormValues(t){this.songForm.patchValue({title:t.title,album:t.album,genre:t.genre,duration:t.duration,releaseDate:t.releaseDate.split("T")[0]})}changing(t){this.formData.append("songFile",t.target.files[0])}onSubmit(){if(this.songForm.valid){const t=this.songForm.value;this.formData.append("title",t.title),this.formData.append("album",t.album),this.formData.append("genre",t.genre),this.formData.append("duration",t.duration),this.formData.append("releaseDate",t.releaseDate),this.addSong$=this.bandServ.bandAddSong(this.formData).subscribe({next:n=>{this.message=n.message,this.description=n.description,this.success=n.success},error:n=>{alert(n)}})}else this.reqMsg="enter the required details",setTimeout(()=>{this.reqMsg=""},3e3)}goBack(){this.success&&this.router.navigate(["band/home"])}updateSong(t){this.bandServ.bandEditSong(this.songForm.value,t).subscribe({next:n=>{this.success=n.success,this.message=n.message,this.description=n.discription},error:n=>{alert(n.error.message)}})}ngOnDestroy(){this.addSong$?.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(s.qu),e.Y36(g),e.Y36(c.F0),e.Y36(c.gz))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-band-add-song"]],decls:48,vars:7,consts:[["enctype","multipart/form-data",1,"p-10",3,"formGroup","ngSubmit"],[1,"mb-4"],["for","songFile",1,"block","text-gray-700","text-sm","font-bold","mb-2"],[1,"text-red-500","-z-10"],["type","file","accept","audio/*","id","songFile","formControlName","songFile",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline",3,"change"],["class","text-red-500 text-xs italic",4,"ngIf"],["for","title",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["type","text","id","title","formControlName","title",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline"],["for","album",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["type","text","id","album","formControlName","album",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline"],["for","genre",1,"block","text-gray-700","text-sm","font-bold","mb-2"],[1,"text-red-500"],["id","genre","formControlName","genre",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline"],["value","pop-music"],["value","rap"],["value","classical"],["value","hip-hop"],["for","duration",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["type","number","id","duration","formControlName","duration",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline"],["for","releaseDate",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["type","date","id","releaseDate","formControlName","releaseDate",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline"],[4,"ngIf"],["type","submit","class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",4,"ngIf"],["type","button","class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",3,"click",4,"ngIf"],["class","fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-screen bg-black bg-opacity-50",4,"ngIf"],[1,"text-red-500","text-xs","italic"],["type","submit",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline"],["type","button",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline",3,"click"],[1,"fixed","top-0","left-0","right-0","z-50","flex","justify-center","items-center","h-screen","bg-black","bg-opacity-50"],[1,"bg-white","shadow-lg","rounded-3xl","overflow-hidden","text-center","py-4","px-8"],[1,"text-2xl","font-bold","mb-2"],[1,"text-gray-700","text-sm"],[1,"mt-4","bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline",3,"click"]],template:function(n,o){if(1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(1,"div",1)(2,"label",2),e._uU(3,"Song File: "),e.TgZ(4,"span")(5,"sup",3),e._uU(6,"*required"),e.qZA()()(),e.TgZ(7,"input",4),e.NdJ("change",function(a){return o.changing(a)}),e.qZA(),e.YNc(8,C,2,0,"div",5),e.qZA(),e.TgZ(9,"div",1)(10,"label",6),e._uU(11,"Title: "),e.TgZ(12,"span")(13,"sup",3),e._uU(14,"*required"),e.qZA()()(),e._UZ(15,"input",7),e.YNc(16,k,2,0,"div",5),e.qZA(),e.TgZ(17,"div",1)(18,"label",8),e._uU(19,"Album:"),e.qZA(),e._UZ(20,"input",9),e.qZA(),e.TgZ(21,"div",1)(22,"label",10),e._uU(23,"Genre: "),e.TgZ(24,"span")(25,"sup",11),e._uU(26,"*required"),e.qZA()()(),e.TgZ(27,"select",12)(28,"option",13),e._uU(29,"Pop Music"),e.qZA(),e.TgZ(30,"option",14),e._uU(31,"Rap"),e.qZA(),e.TgZ(32,"option",15),e._uU(33,"Classical"),e.qZA(),e.TgZ(34,"option",16),e._uU(35,"Hip-Hop"),e.qZA()()(),e.TgZ(36,"div",1)(37,"label",17),e._uU(38,"Duration (in seconds):"),e.qZA(),e._UZ(39,"input",18),e.qZA(),e.TgZ(40,"div",1)(41,"label",19),e._uU(42,"Release Date:"),e.qZA(),e._UZ(43,"input",20),e.qZA(),e.YNc(44,B,2,1,"p",21),e.YNc(45,M,2,0,"button",22),e.YNc(46,q,2,0,"button",23),e.qZA(),e.YNc(47,N,8,2,"div",24)),2&n){let r,a;e.Q6J("formGroup",o.songForm),e.xp6(8),e.Q6J("ngIf",(null==(r=o.songForm.get("songFile"))?null:r.invalid)&&(null==(r=o.songForm.get("songFile"))?null:r.touched)),e.xp6(8),e.Q6J("ngIf",(null==(a=o.songForm.get("title"))?null:a.invalid)&&(null==(a=o.songForm.get("title"))?null:a.touched)),e.xp6(28),e.Q6J("ngIf",o.reqMsg),e.xp6(1),e.Q6J("ngIf",!o.songId),e.xp6(1),e.Q6J("ngIf",o.songId),e.xp6(1),e.Q6J("ngIf",o.success)}},dependencies:[u.O5,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u]})}return i})();var F=l(5759);function J(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw().$implicit,a=e.oxw();return e.KtG(a.showDeleteConfirmation(o,r._id))}),e._uU(1,"Delete"),e.qZA()}}function U(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(o){e.CHM(t);const r=e.oxw().$implicit,a=e.oxw();return e.KtG(a.showDeleteConfirmation(o,r._id))}),e._uU(1,"Undo"),e.qZA()}}function D(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",2),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.playSong(r.songUrl))}),e.TgZ(1,"div",3)(2,"div",4)(3,"p",5),e._uU(4),e.qZA()(),e.TgZ(5,"div",4)(6,"p",5),e._uU(7),e.qZA(),e.TgZ(8,"p",5),e._uU(9),e.qZA()()(),e.TgZ(10,"div")(11,"p",6),e.NdJ("click",function(o){const a=e.CHM(t).$implicit,X=e.oxw();return e.KtG(X.editSong(o,a._id))}),e._uU(12,"Edit"),e.qZA()(),e.TgZ(13,"div",4)(14,"p",7),e.YNc(15,J,2,0,"button",8),e.YNc(16,U,2,0,"button",9),e.qZA()()()}if(2&i){const t=d.$implicit;e.xp6(4),e.Oqu(t.title),e.xp6(3),e.Oqu(t.artist),e.xp6(2),e.Oqu(t.genre),e.xp6(6),e.Q6J("ngIf",0==t.deleteStatus),e.xp6(1),e.Q6J("ngIf",1==t.deleteStatus)}}function I(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",12)(1,"div",13)(2,"h2",14),e._uU(3,"Delete Song Confirmation"),e.qZA(),e.TgZ(4,"p",15),e._uU(5,"Are you sure you want to delete the song? This action cannot be undone."),e.qZA(),e.TgZ(6,"div",16)(7,"button",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.deleteSong())}),e._uU(8,"Yes"),e.qZA(),e.TgZ(9,"button",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.showDeleteDiv=!1)}),e._uU(10,"Cancel"),e.qZA()()()()}}let Y=(()=>{class i{constructor(t,n,o,r){this.bandServ=t,this.sharedServ=n,this.router=o,this.artistServ=r,this.showDeleteDiv=!1}ngOnInit(){this.getBandSongs()}getBandSongs(){this.bandServ.getBandSongs().subscribe({next:t=>{this.songs=t},error:t=>{alert(t.error.message)}})}showDeleteConfirmation(t,n){t.stopPropagation(),this.showDeleteDiv=!0,this.idSong=n}playSong(t){this.sharedServ.setSongUrl(t)}deleteSong(){this.artistServ.artistDeleteSong(this.idSong).subscribe({next:t=>{this.getBandSongs(),this.showDeleteDiv=!1},error:t=>{alert(t.error.message)}})}editSong(t,n){t.stopPropagation(),this.router.navigate([`/band/editSong/${n}`])}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(g),e.Y36(p.B),e.Y36(c.F0),e.Y36(F.J))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-band-songs"]],decls:2,vars:2,consts:[["class","border flex justify-between items-center",3,"click",4,"ngFor","ngForOf"],["class","fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center z-50",4,"ngIf"],[1,"border","flex","justify-between","items-center",3,"click"],[1,"flex-grow","flex","flex-col"],[1,""],[1,"px-6","py-1","whitespace-nowrap","text-gray-700"],[1,"cursor-pointer","text-blue-500",3,"click"],[1,"px-6","py-1","whitespace-nowrap"],["class","text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",3,"click",4,"ngIf"],["class","text-green-500 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50",3,"click",4,"ngIf"],[1,"text-red-500","hover:text-red-700","focus:outline-none","focus:ring-2","focus:ring-red-500","focus:ring-opacity-50",3,"click"],[1,"text-green-500","hover:text-green-700","focus:outline-none","focus:ring-2","focus:ring-green-500","focus:ring-opacity-50",3,"click"],[1,"fixed","top-0","left-0","w-full","h-screen","bg-black","bg-opacity-50","flex","justify-center","items-center","z-50"],[1,"bg-white","shadow-md","rounded-lg","p-4","overflow-hidden","text-center"],[1,"text-2xl","font-bold","mb-2"],[1,"text-gray-700","text-sm","px-6"],[1,"flex","justify-center","mt-4"],[1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline","mr-2",3,"click"],[1,"bg-gray-200","hover:bg-gray-300","text-gray-700","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline",3,"click"]],template:function(n,o){1&n&&(e.YNc(0,D,17,5,"div",0),e.YNc(1,I,11,0,"div",1)),2&n&&(e.Q6J("ngForOf",o.songs),e.xp6(1),e.Q6J("ngIf",o.showDeleteDiv))},dependencies:[u.sg,u.O5]})}return i})();function L(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",18)(1,"input",19),e.NdJ("change",function(){const r=e.CHM(t).$implicit,a=e.oxw(3);return e.KtG(a.toggleSelection(r._id))}),e.qZA(),e.TgZ(2,"label"),e._uU(3),e.qZA()()}if(2&i){const t=d.$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("checked",n.selectedArtists.includes(t._id)),e.xp6(2),e.Oqu(t.username)}}function G(i,d){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,L,4,2,"div",17),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.artists)}}function H(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",9)(1,"input",12),e.NdJ("keyup",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.searchArtist())})("ngModelChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.searchText=o)}),e.qZA(),e.YNc(2,G,2,1,"div",13),e.TgZ(3,"button",14),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.addMembers())}),e._uU(4,"Add"),e.qZA(),e.TgZ(5,"button",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onCancel())}),e._uU(6,"Cancel"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.searchText),e.xp6(1),e.Q6J("ngIf",t.artists)}}function Q(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.addMember=!0)}),e._uU(1,"Add Members"),e.qZA()}}function $(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",21)(1,"p",22),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.getUserProfile(r._id))}),e._uU(2),e.qZA(),e.TgZ(3,"button",15),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.removeMembers(r._id))}),e._uU(4," Remove "),e.qZA()()}if(2&i){const t=d.$implicit;e.xp6(2),e.hij(" ",t.username," ")}}let P=(()=>{class i{constructor(t,n,o){this.bandServ=t,this.router=n,this.sharedServ=o,this.addMember=!1,this.selectedArtists=[]}ngOnInit(){this.getBandMembers()}getBandMembers(){this.bandServ.bandGetMembers().subscribe({next:t=>{this.bandDetails=t.band[0]},error:t=>{alert(t.error.message)}})}getUserProfile(t){this.router.navigate([`/band/user-profile/${t}`])}addMembers(){this.bandServ.addBandMember(this.selectedArtists).subscribe({next:t=>{},error:t=>{alert(t.error.message)}}),this.addMember=!1}toggleSelection(t){const n=this.selectedArtists.indexOf(t);-1===n?this.selectedArtists.push(t):this.selectedArtists.splice(n,1)}onCancel(){this.addMember=!1,this.selectedArtists=[]}searchArtist(){this.bandServ.searchArtist(this.searchText).subscribe({next:t=>{this.artists=t.artists},error:t=>{}})}removeMembers(t){this.bandServ.removeBandMember(t).subscribe({next:n=>{this.getBandMembers()},error:n=>{alert(n.error.message)}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(g),e.Y36(c.F0),e.Y36(p.B))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-manage-members"]],decls:16,vars:7,consts:[[1,"flex","items-center","justify-between","p-5","border","border-gray-300","rounded-lg","shadow-md"],[1,"w-24","h-24","overflow-hidden","rounded-full"],["alt","Band Logo",1,"w-full","h-full","object-cover",3,"src"],[1,"flex-1","ml-5"],[1,"text-xl","font-bold","mb-2"],[1,"mb-2"],["class","mb-4",4,"ngIf"],["class","p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none mb-2",3,"click",4,"ngIf"],[1,"text-lg","font-bold","mt-4","mb-2"],[1,"mb-4"],["class","flex items-center justify-between border-b border-gray-300 py-2",4,"ngFor","ngForOf"],[1,"cursor-pointer","text-blue-500","hover:text-blue-700","transition-colors","duration-300",3,"routerLink"],["type","text","placeholder","Search for artists",1,"p-2","border","border-gray-300","rounded-md","focus:outline-none","focus:border-blue-500",3,"ngModel","keyup","ngModelChange"],["class","mt-2",4,"ngIf"],[1,"p-2","bg-green-500","text-white","rounded-md","mr-2","hover:bg-green-600","focus:outline-none",3,"click"],[1,"p-2","bg-red-500","text-white","rounded-md","hover:bg-red-600","focus:outline-none",3,"click"],[1,"mt-2"],["class","flex items-center mb-2",4,"ngFor","ngForOf"],[1,"flex","items-center","mb-2"],["type","checkbox",1,"mr-2",3,"checked","change"],[1,"p-2","bg-blue-500","text-white","rounded-md","hover:bg-blue-600","focus:outline-none","mb-2",3,"click"],[1,"flex","items-center","justify-between","border-b","border-gray-300","py-2"],[1,"cursor-pointer","hover:underline",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"h2",4),e._uU(5),e.qZA(),e.TgZ(6,"p",5),e._uU(7),e.qZA(),e.YNc(8,H,7,2,"div",6),e.YNc(9,Q,2,0,"button",7),e.TgZ(10,"p",8),e._uU(11,"Members:"),e.qZA(),e.TgZ(12,"div",9),e.YNc(13,$,5,1,"div",10),e.qZA()()(),e.TgZ(14,"p",11),e._uU(15,"Switch to Artist"),e.qZA()),2&n&&(e.xp6(2),e.Q6J("src",null==o.bandDetails?null:o.bandDetails.bandImage,e.LSH),e.xp6(3),e.Oqu(null==o.bandDetails?null:o.bandDetails.bandName),e.xp6(2),e.hij("Admin: ",null==o.bandDetails||null==o.bandDetails.bandAdmin[0]?null:o.bandDetails.bandAdmin[0].username,""),e.xp6(1),e.Q6J("ngIf",o.addMember),e.xp6(1),e.Q6J("ngIf",!o.addMember),e.xp6(4),e.Q6J("ngForOf",null==o.bandDetails?null:o.bandDetails.bandMembers),e.xp6(1),e.Q6J("routerLink","/artist/home"))},dependencies:[u.sg,u.O5,c.rH,s.Fj,s.JJ,s.On]})}return i})();var O=l(3859),K=l(1281);const j=[{path:"",canActivate:[h.i],component:T,children:[{path:"home",component:A},{path:"songs",component:Y},{path:"profile",component:y},{path:"addSongs",component:f},{path:"editSong/:id",component:f},{path:"manageMembers",component:P},{path:"chats/:id",component:O.u},{path:"user-profile/:id",component:K.t},{path:"",redirectTo:"/band/home",pathMatch:"full"}]}];let E=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(j),c.Bz]})}return i})(),z=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[u.ez,E,s.u5,s.UX]})}return i})()}}]);