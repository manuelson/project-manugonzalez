import Database from "./Database.jsx";

export default class BlogRepository extends Database {

    constructor(props) {
        super(props);
        this.table = 'blog'
    }
    getPosts() {
        return new Promise((resolve, reject) => {
            this.selectAll(this.table).then((data) => {
                resolve(data)
            }).catch((error) => {
                console.error(error)
                reject(error)
            })
        })
    }

}

