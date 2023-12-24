import axios from 'axios';
import React, { useState, useEffect } from "react";

const key = process.env.NEXT_PUBLIC_API_KEY;

export const baseURL = `https://api.rawg.io/api/`;

const api = axios.create({
    baseURL: `https://api.rawg.io/api/`,
    params: {
        key: key,
        page_size: 30,
    }
});

export default api;