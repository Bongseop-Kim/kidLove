export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
}
export declare class UpdateUserDto {
    name: string;
    email: string;
    address: string;
    password: string;
    phoneNumber: string;
}
declare const CreateManagerDto_base: import("@nestjs/common").Type<Pick<CreateUserDto, "name" | "email" | "password" | "phoneNumber">>;
export declare class CreateManagerDto extends CreateManagerDto_base {
    adminVerified: string;
    hospitalId: string;
    role: string;
}
export {};
