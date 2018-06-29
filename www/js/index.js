/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Saqirsan',
  // App id
  id: 'com.chris.saqirsan',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/panel-patient/',
      url: 'panel-patient.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

app.navbar.hide(".navbar");
app.toolbar.hide(".toolbar");

app.dialog.alert('Aun en desarrollo. Actualmente funcionando solamente en dispositivos android', 'Saqirsan');
