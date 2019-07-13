import { geocode } from '@esri/arcgis-rest-geocoder';

// assumes you want to use ArcGIS Online
geocode('LAX').then(response); // { ... candidates: [] }

// IRequestOptions is still available
geocode('LAX', {
  params: {
    forStorage: true
  },
  authentication
});
