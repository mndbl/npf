export default function authHeader(currAccToken) {
    if (currAccToken) {

        return {
            headers: {
                'Authorization': `Bearer ${currAccToken}`,
                'Access-Control-Origin': '*.js*'
            }
        }
    } else {
        return {
            headers: {
                'Authorization': null,
                'Access-Control-Origin': '*.js*'
            }
        };
    }
}