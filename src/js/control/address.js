import control from '../control';

/**
 * Button class
 * Output a <button>Label</button> form element
 */
export default class controlAddress extends control {

//'//www.jq22.com/jquery/bootstrap-3.3.4.js',
    configure(){
        this.css = '//www.jq22.com/jquery/bootstrap-3.3.4.css';
        this.js = [ '//www.jq22.com/jquery/bootstrap-3.3.4.js',
         '//cdn.bootcss.com/distpicker/2.0.2/distpicker.js'
        ]
    }
  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
     const template = '<div data-toggle="distpicker" data-autoselect="3">'+
     // const template = '<div id="distpicker">'+
     '<div class="form-group">'+
        '<label class="sr-only" for="province2">Province</label>'+
        '<select class="form-control" id="province2" data-province="---- 选择省 ----"></select>'+
      '</div>'+
      '<div class="form-group">'+
        '<label class="sr-only" for="city2">City</label>'+
        '<select class="form-control" id="city2" data-city="---- 选择市 ----"></select>'+
      '</div>'+
      '<div class="form-group">'+
        '<label class="sr-only" for="district2">District</label>'+
        '<select class="form-control" id="district2" data-district="---- 选择区 ----"></select>'+
      '</div>'+
    '</div>'
    return {
      field: this.markup('div', template, this.config),
      layout: 'div'
    };
  }

  onRender() {
    $('#distpicker').distpicker({
        autoSelect: true
      });
  }


}

// register the following controls
control.register('address', controlAddress);

