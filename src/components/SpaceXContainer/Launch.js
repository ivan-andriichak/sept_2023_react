import css  from './SpaceX.module.css'

const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small: img}} = launch;

    return (
        <div className={css.blockLaunch}>
            <div className={css.blockText}>
                <div>Mission_name: {mission_name}</div>
                <div>Launch_year: {launch_year}</div>
            </div>
            <img className={css.blockImg} src={img} alt={mission_name}/>
        </div>
    );
};

export {Launch};