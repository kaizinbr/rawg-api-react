import axios from 'axios';
import React, { useState, useEffect } from "react";

const key = process.env.NEXT_PUBLIC_API_KEY;

const api = axios.create({
    baseURL: `https://api.rawg.io/api/`,
    params: {
        key: key,
    }
});

export default api;

