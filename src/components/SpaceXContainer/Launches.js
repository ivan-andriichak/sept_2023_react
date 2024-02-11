import {useEffect, useState} from "react";
import {launchService} from "../../services/launchService";
import {Launch} from "./Launch";

import css  from './SpaceX.module.css'


const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        launchService.getAll().then(({data}) => {
            const filtered = data.filter(item=>item.launch_year!=='2020');
            setLaunches(filtered)
        })
    }, []);

    return (
        <div className={css.blockMain}>
            {launches.map(launch=><Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};