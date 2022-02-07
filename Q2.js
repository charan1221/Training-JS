function template(){  
    this.setVersion = (version) => {
      this._version = version;
    }
    
    this.setChannel = (channel) => {
      this._channel = channel;
    }
    
    this.setKeyField = (keyField) => {
      this._keyField = keyField;
    }
    
    this.getVersion = () => {
      return this._version;
    }
    
    this.getChannel = () => {
      return this._channel;
    }
    
    this.getKeyField = () => {
      return this._keyField;
    }
  }
  
  
  const MetadataParser1 = new template();
  const MetadataParser2 = new template();
  const MetadataParser3 = new template();
  
  MetadataParser1.setVersion(1.16);
  MetadataParser1.setChannel('A');
  MetadataParser1.setKeyField('FF0000');
  
  MetadataParser2.setVersion(1.17);
  MetadataParser2.setChannel('B');
  MetadataParser2.setKeyField('00FF00');
  
  MetadataParser3.setVersion(1.18);
  MetadataParser3.setChannel('C');
  MetadataParser3.setKeyField('0000FF');
  
  const objects = [MetadataParser1, MetadataParser2, MetadataParser3];
  const input_arr = [{channel: 'A'}, {channel: 'B'}, {channel:'C'}];
  
  const getKeyFields = (arr) => {
    let keyFields = [];
    let temp_channel;
    arr.forEach(obj => {
      objects.forEach(innerObj => {
        if(obj.channel === innerObj.getChannel()){
          keyFields.push(innerObj.getKeyField());
        }
      });
    });
    
    return keyFields;
  }
  
  console.log(getKeyFields(input_arr));
  