/*! DataCards 1.0.0
 * ©2020 Chonora Ltd - datacards.net/license
 */

/**
 * @summary     DataCards
 * @description Paginate, search and order HTML tables
 * @version     1.0.0
 * @file        jquery.DataCards.js
 * @author      SpryMedia Ltd
 * @contact     www.datacards.net
 * @copyright   Copyright 2008-2019 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datacards.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datacards.net
 */
class dataClass{
    constructor(dom, options){
        let dataClass = this;
        dataClass.dom = dom;
        dataClass.options = options;
        console.log('initializing DataCards...!');
        if('ajax' in options){
            console.log('Starting ajax call');
            $.ajax(options.ajax)
            .done(function( response ) {
                console.log( "data fetched",response );
                dataClass.saveData(response.books);
            });
        }
    }

    saveData(data) {
        let dataClass = this;
        let fields = dataClass.options.fields;
        for(let i in data){
            for(let j in fields){
                if(fields[j].data in data[i]){
                    console.log(data[i][fields[j].data])
                }
            }
        }
    }
}
$.fn.dataCards = function(options){
    let dom = this;
    return new dataClass(dom, options);
}