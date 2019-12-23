import { Container } from 'inversify';
import { config } from '../config';
import { FidEntity } from '../entities/fid.entity';
import { PriceTypeEntity } from '../entities/price.type.entity';
import { StateEntity } from '../entities/state.entity';
import { ENTITY_TYPES } from '../entities/types';
import { FidMapper } from '../mappers/fid.mapper';
import { PriceTypeMapper } from '../mappers/price.type.mapper';
import { StateMapper } from '../mappers/state.mapper';
import { MAPPER_TYPES } from '../mappers/types';
import { IAdvertTypesRepository } from '../repositories/interfaces/iadvert.types.repository';
import { ICitiesRepository } from '../repositories/interfaces/icities.repository';
import { REPOSITORY_TYPES } from '../repositories/types';
import { IAdvertType } from '../schemas/interfaces/iadvert.type';
import { IPriceType } from '../schemas/interfaces/iprice.type';
import { IRealtyType } from '../schemas/interfaces/irealty.type';
import { IState } from '../schemas/interfaces/istate';
import { IWallType } from '../schemas/interfaces/iwall.type';
import { ICitiesService } from '../services/interfaces/icities.service';
import { SERVICE_TYPES } from '../services/types';
import { AdvertTypeEntity } from './../entities/advert.type.entity';
import { CityEntity } from './../entities/city.entity';
import { RealtyTypeEntity } from './../entities/realty.type.entity';
import { WallTypeEntity } from './../entities/wall.type.entity';
import { AdvertTypeMapper } from './../mappers/advert.type.mapper';
import { CityMapper } from './../mappers/city.mapper';
import { RealtyTypeMapper } from './../mappers/realty.type.mapper';
import { WallTypeMapper } from './../mappers/wall.type.mapper';
import { AdvertTypesRepository } from './../repositories/advert.types.repository';
import { CitiesRepository } from './../repositories/cities.repository';
import { FidsRepository } from './../repositories/fids.repository';
import { IFidsRepository } from './../repositories/interfaces/ifids.repository';
import { IPriceTypesRepository } from './../repositories/interfaces/iprice.types.repository';
import { IRealtyTypesRepository } from './../repositories/interfaces/irealty.types.repository';
import { IStatesRepository } from './../repositories/interfaces/istates.repository';
import { IWallTypesRepository } from './../repositories/interfaces/iwall.types.repository';
import { PriceTypesRepository } from './../repositories/price.types.repository';
import { RealtyTypesRepository } from './../repositories/realty.types.repository';
import { StatesRepository } from './../repositories/states.repository';
import { WallTypesRepository } from './../repositories/wall.types.repository';
import { ICity } from './../schemas/interfaces/icity';
import { IFid } from './../schemas/interfaces/ifid';
import { AdvertTypesService } from './../services/advert.types.service';
import { CitiesService } from './../services/cities.service';
import { FidsService } from './../services/fids.service';
import { IAdvertTypesService } from './../services/interfaces/iadvert.types.service';
import { IFidsService } from './../services/interfaces/ifids.service';
import { IPriceTypesService } from './../services/interfaces/iprice.types.service';
import { IRealtyTypesService } from './../services/interfaces/irealty.types.service';
import { IStatesService } from './../services/interfaces/istates.service';
import { IWallTypesService } from './../services/interfaces/iwall.types.service';
import { MongoConnectionService } from './../services/mongo.service';
import { PriceTypesService } from './../services/price.types.services';
import { RealtyTypesService } from './../services/realty.types.service';
import { StatesService } from './../services/states.service';
import { WallTypesService } from './../services/wall.types.service';

const iocContainer = new Container();

iocContainer
.bind<MongoConnectionService>(SERVICE_TYPES.MongoConnectionService)
.toConstantValue(new MongoConnectionService(config.MONGO_CONNECTION_STRING));

iocContainer.bind<IAdvertType>(ENTITY_TYPES.IAdvertType).to(AdvertTypeEntity);
iocContainer.bind<ICity>(ENTITY_TYPES.ICity).to(CityEntity);
iocContainer.bind<IFid>(ENTITY_TYPES.IFid).to(FidEntity);
iocContainer.bind<IPriceType>(ENTITY_TYPES.IPriceType).to(PriceTypeEntity);
iocContainer.bind<IRealtyType>(ENTITY_TYPES.IRealtyType).to(RealtyTypeEntity);
iocContainer.bind<IState>(ENTITY_TYPES.IState).to(StateEntity);
iocContainer.bind<IWallType>(ENTITY_TYPES.IWallType).to(WallTypeEntity);

iocContainer.bind<AdvertTypeMapper>(MAPPER_TYPES.AdvertTypeMapper).to(AdvertTypeMapper);
iocContainer.bind<CityMapper>(MAPPER_TYPES.CityMapper).to(CityMapper);
iocContainer.bind<FidMapper>(MAPPER_TYPES.FidMapper).to(FidMapper);
iocContainer.bind<PriceTypeMapper>(MAPPER_TYPES.PriceTypeMapper).to(PriceTypeMapper);
iocContainer.bind<RealtyTypeMapper>(MAPPER_TYPES.RealtyTypeMapper).to(RealtyTypeMapper);
iocContainer.bind<StateMapper>(MAPPER_TYPES.StateMapper).to(StateMapper);
iocContainer.bind<WallTypeMapper>(MAPPER_TYPES.WallTypeMapper).to(WallTypeMapper);

iocContainer.bind<IAdvertTypesRepository>(REPOSITORY_TYPES.IAdvertTypesRepository).to(AdvertTypesRepository);
iocContainer.bind<ICitiesRepository>(REPOSITORY_TYPES.ICitiesRepository).to(CitiesRepository);
iocContainer.bind<IFidsRepository>(REPOSITORY_TYPES.IFidsRepository).to(FidsRepository);
iocContainer.bind<IPriceTypesRepository>(REPOSITORY_TYPES.IPriceTypesRepository).to(PriceTypesRepository);
iocContainer.bind<IRealtyTypesRepository>(REPOSITORY_TYPES.IRealtyTypesRepository).to(RealtyTypesRepository);
iocContainer.bind<IStatesRepository>(REPOSITORY_TYPES.IStatesRepository).to(StatesRepository);
iocContainer.bind<IWallTypesRepository>(REPOSITORY_TYPES.IWallTypesRepository).to(WallTypesRepository);

iocContainer.bind<IAdvertTypesService>(SERVICE_TYPES.IAdvertTypesService).to(AdvertTypesService);
iocContainer.bind<ICitiesService>(SERVICE_TYPES.ICitiesService).to(CitiesService);
iocContainer.bind<IFidsService>(SERVICE_TYPES.IFidsService).to(FidsService);
iocContainer.bind<IPriceTypesService>(SERVICE_TYPES.IPriceTypesService).to(PriceTypesService);
iocContainer.bind<IRealtyTypesService>(SERVICE_TYPES.IRealtyTypesService).to(RealtyTypesService);
iocContainer.bind<IStatesService>(SERVICE_TYPES.IStatesService).to(StatesService);
iocContainer.bind<IWallTypesService>(SERVICE_TYPES.IWallTypesService).to(WallTypesService);

export { iocContainer };
