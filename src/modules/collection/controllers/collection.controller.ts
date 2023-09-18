// collection.controller.ts

import { Controller, Post, Body, Param, Get, Query } from '@nestjs/common';
import { CollectionService } from '../services/collection.service';
import {
  CreateCollectionDto,
  CreateAttributeDto,
  NFTCollectionsDto,
} from '../dto/collection.dto';

@Controller({
  version: '1',
})
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}
  @Get('collections')
  async getCollections() {
    return this.collectionService.getCollections();
  }
  @Post()
  async createCollection(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionService.createCollection(createCollectionDto);
  }

  @Post(':collectionId/attributes')
  async createAttribute(
    @Param('collectionId') collectionId: string,
    @Body() createAttributeDto: CreateAttributeDto,
  ) {
    return this.collectionService.createAttribute(
      collectionId,
      createAttributeDto,
    );
  }

  @Get('contracts')
  async getContracts(@Query() query: NFTCollectionsDto) {
    return this.collectionService.getConts(query);
  }
}
