"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalController = void 0;
const common_1 = require("@nestjs/common");
const hospital_service_1 = require("./hospital.service");
const swagger_1 = require("@nestjs/swagger");
const success_interceptor_1 = require("../common/interceptor/success.interceptor");
const hospital_entity_1 = require("./entities/hospital.entity");
const put_hospital_dto_1 = require("./dto/put-hospital.dto");
let HospitalController = class HospitalController {
    constructor(hospitalService) {
        this.hospitalService = hospitalService;
    }
    findAll(depth1, depth2, size, page, sort) {
        return this.hospitalService.findAll(depth1, depth2, +size, +page, sort);
    }
    findOne(id) {
        return this.hospitalService.findOne(id);
    }
    update(id, data) {
        return this.hospitalService.put(id, data);
    }
    remove(id) {
        return this.hospitalService.remove(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '지역 별 병원 찾기' }),
    (0, swagger_1.ApiCreatedResponse)({ type: hospital_entity_1.HospitalEntity }),
    __param(0, (0, common_1.Query)('depth1')),
    __param(1, (0, common_1.Query)('depth2')),
    __param(2, (0, common_1.Query)('size')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '특정 병원 찾기' }),
    (0, swagger_1.ApiCreatedResponse)({ type: hospital_entity_1.HospitalEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '병원 수정' }),
    (0, swagger_1.ApiCreatedResponse)({ type: hospital_entity_1.HospitalEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, put_hospital_dto_1.PutHospitalDto]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '병원 삭제' }),
    (0, swagger_1.ApiCreatedResponse)({ type: hospital_entity_1.HospitalEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "remove", null);
HospitalController = __decorate([
    (0, common_1.Controller)('hospital'),
    (0, swagger_1.ApiTags)('Hospital'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [hospital_service_1.HospitalService])
], HospitalController);
exports.HospitalController = HospitalController;
//# sourceMappingURL=hospital.controller.js.map