/***********************************************************************************************************************
 *
 * API.AI Cordova Android SDK
 * =================================================
 *
 * Copyright (C) 2014 by Speaktoit, Inc. (https://www.speaktoit.com)
 * https://www.api.ai
 *
 ***********************************************************************************************************************
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 ***********************************************************************************************************************/

var cordova = require('cordova'),
exec = require('cordova/exec');

var ApiAIPlugin = function() {
        this.options = {};
};

ApiAIPlugin.prototype = {
    init: function(subscriptionKey, clientAccessToken, success, error) {

        if (!subscriptionKey) {
            throw new Error("subscriptionKey must not be empty");
        };

        if (!clientAccessToken) {
            throw new Error("clientAccessToken must not be empty");
        };

        success = success || null;
        error = error || null;

        cordova.exec(
             success, 
             error,
             "ApiAIPlugin",
             "init",
             ["https://api.api.ai/v1", clientAccessToken, subscriptionKey]
             );
    },

    requestText: function(options, success, error) {

        if (!options) {
            throw new Error("options must not be null");
        };

        success = success || null;
        error = error || null;

        cordova.exec(success,
                     error,
                     "ApiAIPlugin",
                     "requestText",
                     [options]);
    },

    requestVoice: function (options, success, error) {

        if (!options) {
            throw new Error("options must not be null");
        };

        success = success || null;
        error = error || null;

        cordova.exec(success,
                     error,
                     "ApiAIPlugin",
                     "requestVoice",
                     [options]);
    },

    levelMeterCallback: function (callback) {
        cordova.exec(callback,
                      null,
                      "ApiAIPlugin",
                      "levelMeterCallback",
                      []);
     },

    cancelAllRequests: function () {
        cordova.exec(null,
                     null,
                     "ApiAIPlugin",
                     "cancelAllRequests",
                     []);
    }

};

var ApiAIPlugin = new ApiAIPlugin();

module.exports = ApiAIPlugin;