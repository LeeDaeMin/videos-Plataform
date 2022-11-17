import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';



@Controller('admin')
export class AdminController {
  constructor(private readonly AdminService: AdminService) {}

  @Get('/id/:id')
  async getAdmin(@Param('id') id: string):
  Promise<AdminModel>{
    return this.AdminService.admin({id: Number(id)})
  }

  @Post('/createAdmin')
  async createAdmin(@Body() CreateAdminDto: CreateAdminDto): Promide<AdminModel>{
    return this.AdminService.newAdmin(CreateAdminDto);
  }
}
