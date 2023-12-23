import React, {Component} from 'react';
import { createClient } from "@supabase/supabase-js";
import Database from "../service/Database.jsx";

export default class BlogRepository extends Component {

    constructor(props) {
        super(props);
        this.table = 'blog'
    }
    getPosts() {
        return new Promise((resolve, reject) => {
            const database = new Database()
            database.selectAll(this.table).then((data) => {
                resolve(data)
                console.log('entro')
            }).catch((error) => {
                console.error(error)
                reject(error)
            })
        })
    }

}

