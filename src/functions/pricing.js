import axios from 'axios';

export const getTiers = async () => {return await axios.get(`../dummyData/tiers.json`)};