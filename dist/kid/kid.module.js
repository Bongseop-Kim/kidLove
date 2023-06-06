"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KidModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const prisma_module_1 = require("../prisma/prisma.module");
const kid_controller_1 = require("./kid.controller");
const kid_service_1 = require("./kid.service");
const kid_repository_1 = require("./kid.repository");
let KidModule = class KidModule {
};
KidModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => auth_module_1.AuthModule), prisma_module_1.PrismaModule],
        controllers: [kid_controller_1.KidController],
        providers: [kid_service_1.KidService, kid_repository_1.KidRepository],
        exports: [kid_service_1.KidService, kid_repository_1.KidRepository],
    })
], KidModule);
exports.KidModule = KidModule;
//# sourceMappingURL=kid.module.js.map