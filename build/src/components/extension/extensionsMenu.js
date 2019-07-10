"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = __importDefault(require("./movie/menu"));
var mockInsertMenu = {
    movie: menu_1.default,
};
var extensionsMenu = function (menu) {
    return menu.map(function (menuItem) { return mockInsertMenu[menuItem]; });
};
exports.default = extensionsMenu;
