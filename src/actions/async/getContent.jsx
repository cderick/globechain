/* eslint import/prefer-default-export: "off" */

import axios from 'axios';
import { API_URL } from '../../constants/config';
import * as types from '../../constants/ActionTypes';

export function getDataContent(value) {
	const req = axios.get(`${API_URL}${value}`);

	return {
		type: types.GET_APICONTENT,
		payload: req,
	};
}
