webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<task-list></task-list>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_task_component__ = __webpack_require__("./src/app/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_service__ = __webpack_require__("./src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__task_task_component__["a" /* TaskComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_snack_bar__["c" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__task_service__["a" /* TaskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*import {Injectable} from '@angular/core';
import {Task} from './task/task';
import {Tasks} from './task/mock-tasks';
import {Observable, of} from 'rxjs';*/





var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        //private taskUrl = 'http://localhost:4200/assets/taskData.json';
        //private taskUrl = 'http://localhost:8000/tasks';
        this.taskUrl = 'https://dailytodolist.herokuapp.com/tasks';
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.taskUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TaskService.prototype.createTask = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.taskUrl, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    TaskService.prototype.updateTask = function (body) {
        var bodyString = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.taskUrl, bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server Error'); });
    };
    TaskService.prototype.deleteTask = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.taskUrl + "/" + id, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json) || 'Server Error'; });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\r\n    font: bold;\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;;\r\n    font-size: 1.5em;\r\n}\r\n.taskCreateCard{\r\n    border-radius: 1em;\r\n    padding: 3%;\r\n}\r\n#createTaskTitle{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 2em;\r\n    color: #1C4EA5;\r\n}\r\n#taskCardButton{\r\n    position: absolute;\r\n    right: 3%;\r\n    border-radius: .3em;\r\n}\r\n#taskCardButtonUpdate{\r\n    position: absolute;\r\n    border-radius: .3em;\r\n    right: 3%;\r\n    display: inline-block;\r\n}\r\n#taskCardButtonCancel{\r\n    position: absolute;\r\n    border-radius: .3em;\r\n    left: 68%;\r\n    display: inline-block;\r\n}\r\n#taskName{\r\n    width: 100%;\r\n}\r\n::ng-deep .mat-input-wrapper{\r\n    position: relative;\r\n    width:348% !important;\r\n}\r\n.taskIconimage{\r\n    background-image: url('data:image/png;base64,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');\r\n    background-size: cover;\r\n}\r\n.alert{\r\n    /*background-color: #27C5FE;*/\r\n    color: blue;\r\n    font:bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    border-radius: .4em;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\nul {\r\n    list-style-type: none;\r\n    width: 100%;\r\n}\r\n.limitChars {\r\n    max-width: 500px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    word-wrap: break-word;\r\n}\r\n.limitChars :hover{\r\n    \r\n}\r\n#th1{\r\n    padding-left: 6%;\r\n    margin-left: 200%;\r\n}\r\n#th2{\r\n    padding-left: 28%;\r\n}\r\n#th3{\r\n    padding-left: 41%;\r\n}\r\n.tdStyle{\r\n    vertical-align: middle;\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n}\r\nbutton{\r\n    outline: none;\r\n}\r\nimg.loaderClass{\r\n    position: absolute;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    left:45%;\r\n}\r\n.foot{\r\n    background-color:rgba(0, 0, 0, 1);\r\n    color: white;\r\n    text-align: center;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n::ng-deep snack-bar-container.addSnack{\r\n    background: rgb(14, 150, 9);\r\n    color: white;\r\n    position: absolute;\r\n    left: 40%;\r\n    top: 10%;\r\n}\r\n::ng-deep snack-bar-container.updateSnack{\r\n    background: rgb(209, 112, 20);\r\n    color: white;\r\n    position: absolute;\r\n    left: 40%;\r\n    top: 10%;\r\n}\r\n::ng-deep snack-bar-container.deleteSnack{\r\n    background: rgb(84, 10, 133);\r\n    color: white;\r\n    position: absolute;\r\n    left: 40%;\r\n    top: 10%;\r\n}\r\n::ng-deep snack-bar-container.validationSnack{\r\n    background: rgb(206, 21, 21);\r\n    color: white;\r\n    position: absolute;\r\n    left: 40%;\r\n    top: 10%;\r\n}\r\n:host .actionButtonLabel {\r\n    color: blue;\r\n  }"

/***/ }),

/***/ "./src/app/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n   <h1>Create your To Do List</h1>   \r\n</mat-toolbar>\r\n<br><br>\r\n<mat-card class='taskCreateCard col-md-6 mx-auto'>\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"taskIconimage\"></div>\r\n        <mat-card-title id=\"createTaskTitle\">Create new Task</mat-card-title>\r\n    </mat-card-header>\r\n<div class=\"container w-100\">\r\n    <div class=\"row align-items-center w-100\">\r\n    <mat-card-actions>\r\n        <form #formRef>\r\n            <mat-form-field>\r\n                <input id=\"taskName\" type=\"text\" matInput placeholder=\"Task Name\" value=\"\" #newTaskEl>\r\n            </mat-form-field>\r\n                <button *ngIf=\"!edited\" id=\"taskCardButton\" mat-raised-button color=\"primary\" (click)='createTask(newTaskEl.value)'>Add to List</button>\r\n                <button *ngIf=\"edited\" id=\"taskCardButtonUpdate\" mat-raised-button color=\"primary\" (click)='updateTask(newTaskEl.value)'>Update</button>\r\n                <button *ngIf=\"edited\" id=\"taskCardButtonCancel\" mat-raised-button color=\"warn\" (click)='cancelUpdateTask()'>Cancel</button>\r\n        </form>\r\n    </mat-card-actions>\r\n    </div> \r\n</div>\r\n</mat-card>\r\n<div *ngIf=\"loader\" class=\"container\">\r\n    <img src=\"../../assets/smloader2.gif\" alt=\"loading...\" class=\"loaderClass\"/>\r\n<br><br>\r\n</div>\r\n<div class=\"container\">\r\n    <br>\r\n    <h1>Your Tasks:</h1>\r\n    <table class=\"table table-striped col-md-12\">\r\n        <thead class=\"table-primary\">\r\n            <tr>\r\n                <th id=\"th1\">No.</th>\r\n                <th id=\"th2\">Task Name</th>\r\n                <th id=\"th3\">Actions</th>\r\n            </tr>\r\n        </thead>\r\n    </table>\r\n</div>\r\n<div *ngIf=\"tasks.length == 0\" class=\"container\">\r\n    <table class=\"table table-striped\">\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"alert\" align=\"center\">\r\n                    Your To Do List is empty!!!\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class=\"container\">\r\n        <ul>\r\n            <li *ngFor='let task of tasks, let i=index'>\r\n        <table class=\"table table-striped\">\r\n        <tbody>\r\n            <tr>\r\n                <td align=\"left\" class=\"tdStyle\">{{task.id}}</td>\r\n                <td align=\"left\" class=\"limitChars\">{{task.taskName}}</td>\r\n                <td align=\"right\" class=\"tdStyle\">\r\n                    <button mat-mini-fab color=\"primary\" (click)='editTask(i, task)'><mat-icon>edit</mat-icon></button>\r\n                    <button [disabled]=\"edited\" mat-mini-fab color=\"warn\" (click)='deleteTask(i, task)'><mat-icon>delete</mat-icon></button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    </li></ul>\r\n</div>\r\n<footer class=\"page-footer\">\r\n    <div class=\"footer-copyright\">\r\n        <div class=\"foot container-fluid\">\r\n           Copy Rights  © 2018 &emsp; Hariharan M B S\r\n        </div>\r\n    </div>\r\n</footer>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--<h2>{{task.taskName | uppercase}} Details</h2>\r\n<div><span>Id : </span>{{task.id}}</div>\r\n<div><span>Task Name : </span>{{task.taskName}}</div>\r\n<div>\r\n<label> Task Name: \r\n<input type=\"text\" [(ngModel)]=\"task.taskName\" placeholder=\"Name\">\r\n</label>\r\n</div>-->"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task__ = __webpack_require__("./src/app/task/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__("./src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskComponent = /** @class */ (function () {
    function TaskComponent(taskService, snackBar) {
        this.taskService = taskService;
        this.snackBar = snackBar;
        this.edited = false;
        this.emptyValidationFlag = false;
        this.editedIndex = -1;
        this.nextId = 0;
        this.loader = false;
        this.snackColor = null;
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.loader = true;
        this.getTasks();
    };
    TaskComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (taskRx) {
            _this.tasks = taskRx,
                _this.nextId = _this.tasks[_this.tasks.length - 1].id,
                _this.loader = false;
        }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    TaskComponent.prototype.emptyValidation = function (newTaskName) {
        this.emptyValidationFlag = false;
        if (newTaskName != '' && newTaskName != '/^\S*$/') {
            this.emptyValidationFlag = true;
        }
    };
    TaskComponent.prototype.createTask = function (newTaskName) {
        var _this = this;
        newTaskName = newTaskName.trim();
        this.emptyValidation(newTaskName);
        if (this.emptyValidationFlag == true) {
            this.loader = true;
            if (this.tasks.length == 0) {
                this.nextId = 0;
            }
            this.nextId++;
            this.taskService.createTask(new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */](this.nextId, newTaskName)).subscribe(function (taskRX) {
                _this.tasks.push(taskRX),
                    _this.loader = false;
                _this.snackColor = 'add';
                _this.showMessage();
            }, function (err) {
                console.log(err);
            });
            this.resetForm();
        }
        else {
            this.snackColor = 'validation';
            this.showMessage();
        }
    };
    TaskComponent.prototype.editTask = function (index, editedTask) {
        this.newTaskEl.nativeElement.value = editedTask.taskName;
        this.edited = true;
        this.editedIndex = index;
    };
    TaskComponent.prototype.updateTask = function (updatedTask) {
        var _this = this;
        this.loader = true;
        this.taskService.updateTask(new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */](this.tasks[this.editedIndex].id, updatedTask))
            .subscribe(function (taskRxUpdated) {
            _this.tasks[_this.editedIndex].id = taskRxUpdated.id,
                _this.tasks[_this.editedIndex].taskName = taskRxUpdated.taskName,
                _this.loader = false;
            _this.snackColor = 'update';
            _this.showMessage();
        }, function (err) {
            console.log(err);
        });
        this.resetForm();
        this.edited = false;
    };
    TaskComponent.prototype.cancelUpdateTask = function () {
        this.resetForm();
        this.edited = false;
    };
    TaskComponent.prototype.deleteTask = function (index, taskToDelete) {
        var _this = this;
        if (confirm("Are you sure to delete Task : " + taskToDelete.id + ". " + taskToDelete.taskName)) {
            this.loader = true;
            this.taskService.deleteTask(taskToDelete.id).subscribe(function (taskRx) {
                _this.tasks = taskRx;
                _this.loader = false;
                _this.snackColor = 'delete';
                _this.showMessage();
            }, function (err) {
                console.log(err);
            });
        }
    };
    TaskComponent.prototype.resetForm = function () {
        this.form.nativeElement.reset();
    };
    TaskComponent.prototype.showMessage = function () {
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatSnackBarConfig */]();
        config.horizontalPosition = 'center';
        config.verticalPosition = 'top';
        config.extraClasses = this.snackColor == 'validation' ? ['validationSnack'] : (this.snackColor == 'add' ?
            ['addSnack'] : (this.snackColor == 'update' ? ['updateSnack'] : ['deleteSnack']));
        config.duration = 3000;
        this.snackBar.open(this.snackColor == 'validation' ? "No need to create Empty Task" : (this.snackColor == 'add' ?
            "Task Saved successfully" : (this.snackColor == 'update' ? "Task Updated Successfully" : "Task Deleted Successfully")), "OK", config);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('newTaskEl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TaskComponent.prototype, "newTaskEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('formRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TaskComponent.prototype, "form", void 0);
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'task-list',
            template: __webpack_require__("./src/app/task/task.component.html"),
            styles: [__webpack_require__("./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSnackBar */]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/task/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(id, taskName) {
        this.id = 0;
        this.taskName = null;
        this.id = id;
        this.taskName = taskName;
    }
    return Task;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map