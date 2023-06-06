import { HospitalRepository } from './hospital.repository';
import { PutHospitalDto } from './dto/put-hospital.dto';
export declare class HospitalService {
    private hospitalRepository;
    constructor(hospitalRepository: HospitalRepository);
    findAll(depth1: string, depth2: string, size: number, page: number, sort: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Hospital[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__HospitalClient<import(".prisma/client").Hospital & {
        images: import(".prisma/client").Image[];
    }, never>;
    put(id: string, data: PutHospitalDto): import(".prisma/client").Prisma.Prisma__HospitalClient<import(".prisma/client").Hospital, never>;
    remove(id: string): string;
}