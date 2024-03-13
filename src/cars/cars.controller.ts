import { Controller, Get, Param, Post, Body, Patch, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService,
  ){}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById( @Param('id', new ParseUUIDPipe({ version:'4'})) id:string) {
    return this.carsService.findOneById(id)
  }

  @Post()
  createCar( @Body() createCarDto:CreateCarDto){
    return createCarDto;
  }

  @Patch(':id')
  updateCar( 
      @Param('id') id:string,
      @Body() body:any
    ){
    return body;
  }

  @Delete(':id')
  deleteCar( @Param('id') id:string){
    return {
      method: 'deleted',
      id
    }
  }
}
