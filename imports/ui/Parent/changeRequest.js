import { Template } from 'meteor/templating';
import { Parents } from '../../api/task.js';

import './changeRequest.html';
import '../Others/routes.js';

Template.body.helpers({
    parents(){
        return Parents.find({});
    },
});
