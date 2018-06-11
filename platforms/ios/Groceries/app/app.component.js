// import { Component } from "@angular/core";
// import { User } from "./shared/user/user";
// import { UserService } from "./shared/user/user.service";
//
// @Component({
//   selector: "my-app",
//   providers: [UserService],
//   templateUrl: "./pages/login/login.html",
//   styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
// })
//
// export class AppComponent {
//   user: User;
//   isLoggingIn = true;
//
//   constructor(private userService: UserService) {
//     this.user = new User();
//   }
//
//   toggleDisplay(){
//     this.isLoggingIn = !this.isLoggingIn;
//   }
//
//   submit(){
//     if (this.isLoggingIn) {
//       this.login();
//     } else {
//       this.signUp();
//     }
//   }
//
//   login() {
//     //TODO: Define
//   }
//
//   signUp() {
//     this.userService.register(this.user)
//       .subscribe(
//         () => {
//           alert("Your account was successfully created.");
//           this.toggleDisplay();
//         },
//         () => alert("Unfortunately we were unable to create your account.")
//       );
//   }
//
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw0REFBNEQ7QUFDNUQsRUFBRTtBQUNGLGVBQWU7QUFDZix3QkFBd0I7QUFDeEIsOEJBQThCO0FBQzlCLDZDQUE2QztBQUM3Qyx5RUFBeUU7QUFDekUsS0FBSztBQUNMLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsZ0JBQWdCO0FBQ2hCLHdCQUF3QjtBQUN4QixFQUFFO0FBQ0Ysb0RBQW9EO0FBQ3BELDhCQUE4QjtBQUM5QixNQUFNO0FBQ04sRUFBRTtBQUNGLHFCQUFxQjtBQUNyQiw0Q0FBNEM7QUFDNUMsTUFBTTtBQUNOLEVBQUU7QUFDRixjQUFjO0FBQ2QsOEJBQThCO0FBQzlCLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCLFFBQVE7QUFDUixNQUFNO0FBQ04sRUFBRTtBQUNGLGNBQWM7QUFDZCxxQkFBcUI7QUFDckIsTUFBTTtBQUNOLEVBQUU7QUFDRixlQUFlO0FBQ2YsMkNBQTJDO0FBQzNDLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsNkRBQTZEO0FBQzdELGtDQUFrQztBQUNsQyxhQUFhO0FBQ2IsOEVBQThFO0FBQzlFLFdBQVc7QUFDWCxNQUFNO0FBQ04sRUFBRTtBQUNGLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXJcIjtcbi8vIGltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG4vL1xuLy8gQENvbXBvbmVudCh7XG4vLyAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuLy8gICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4vLyAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuLy8gICBzdHlsZVVybHM6IFsncGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzcycsICdwYWdlcy9sb2dpbi9sb2dpbi5jc3MnXVxuLy8gfSlcbi8vXG4vLyBleHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbi8vICAgdXNlcjogVXNlcjtcbi8vICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuLy9cbi8vICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbi8vICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuLy8gICB9XG4vL1xuLy8gICB0b2dnbGVEaXNwbGF5KCl7XG4vLyAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuLy8gICB9XG4vL1xuLy8gICBzdWJtaXQoKXtcbi8vICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuLy8gICAgICAgdGhpcy5sb2dpbigpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICB0aGlzLnNpZ25VcCgpO1xuLy8gICAgIH1cbi8vICAgfVxuLy9cbi8vICAgbG9naW4oKSB7XG4vLyAgICAgLy9UT0RPOiBEZWZpbmVcbi8vICAgfVxuLy9cbi8vICAgc2lnblVwKCkge1xuLy8gICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuLy8gICAgICAgLnN1YnNjcmliZShcbi8vICAgICAgICAgKCkgPT4ge1xuLy8gICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4vLyAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgICgpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKVxuLy8gICAgICAgKTtcbi8vICAgfVxuLy9cbi8vIH1cbiJdfQ==