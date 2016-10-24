function GetValue(data, startModel, endmodel) {
    var start=data.indexOf(startModel);
    var end=data.indexOf(endmodel,start);
    if(!endmodel)end=data.length
    if(start==-1 || end==-1) return '';
    return data.substr(start+startModel.length , end-(start+startModel.length))
}
exports.GetValue = GetValue;