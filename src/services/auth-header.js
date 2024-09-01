export default function authHeader(currAccToken) {
    if (currAccToken) {

        return {
            headers: {
                'Authorization': `Bearer ${currAccToken}`,
                'Access-Control-Origin': '*.js*',
                'Access-Control-Allow-Origin': '*.js*'
            }
        }
    } else {
        return {
            headers: {
                'Authorization': null,
                'Access-Control-Origin': '*.js*',
                'Access-Control-Allow-Origin': '*.js*'
            }
        };
    }
}