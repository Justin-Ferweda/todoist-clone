import React from 'react';
import {Sidebar} from './Sidebar'
import { Tasks } from '../layout/Tasks'

export const Content = () =>(
    <section>
        <Sidebar/>
        <Tasks />
    </section>
);