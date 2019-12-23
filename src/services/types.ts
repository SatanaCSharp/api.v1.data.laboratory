const SERVICE_TYPES = {
    MongoConnectionService: Symbol.for('MongoConnectionService'),
    IAdvertTypesService: Symbol.for('IAdvertTypesService'),
    ICitiesService: Symbol.for('ICitiesService'),
    IFidsService: Symbol.for('IFidsService'),
    IFidsXmlService: Symbol.for('IFidsXmlService'),
    IPriceTypesService: Symbol.for('IPriceTypesService'),
    IRealtyTypesService: Symbol.for('IRealtyTypesService'),
    IStatesService: Symbol.for('IStatesService'),
    IWallTypesService: Symbol.for('IWallTypesService'),
};

export { SERVICE_TYPES };
