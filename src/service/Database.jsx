import React, {Component} from 'react';
import { createClient } from "@supabase/supabase-js";

export default class Database extends Component {

    constructor(props)
    {
        super(props);
        this.supabase = createClient(
            import.meta.env.VITE_SUPABASE_URL,
            import.meta.env.VITE_SUPABASE_KEY
        );
    }

    async selectAll(table) {
        const { data } = await this.supabase.from(table).select();
        return data
    }

}

