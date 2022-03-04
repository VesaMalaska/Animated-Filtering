import { motion } from "framer-motion";

const movieImageRepository = {
    baseUrl: "https://image.tmdb.org/t/p",
    imageWidth: "w500",
};

export const Movie = ({movie}) => {
    const {title,backdrop_path} = movie;
    const {baseUrl, imageWidth} = movieImageRepository;

    return (
        <motion.div 
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
        >
            <h2>{title}</h2>
            <img src={`${baseUrl}/${imageWidth}${backdrop_path}`} alt={title} />
        </motion.div>
    );
};
