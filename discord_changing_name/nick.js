// setting ur headers first
const host = "https://discord.com"
const discord_guild_id = "guld id here";
const api = '/api/v9/guilds/'+ discord_guild_id +'/members/@me';
let NAME = "Stellina" // changing name here
const timeToDelay = 3000
const n = NAME.split("");
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}; 

(async ()=>{
    while (true) {
        await delay(timeToDelay);
        let names = "";
        for (let i=0;i<n.length;i++) {
            names += n[i];
            let body = {"nick": names};
            let jsonString = JSON.stringify(body);
            let contentLength = Buffer.byteLength(jsonString, 'utf-8');
            let headers = {
                "Host": "discord.com",
                "Connection": "keep-alive",
                "Content-Length": contentLength,
                "Content-Type": "application/json",
                "X-Super-Properties": "",
                "X-Discord-Locale": "th",
                "X-Debug-Options": "bugReporterEnabled",
                "Authorization": "",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.199 Safari/537.36",
                "X-Discord-Timezone": "Asia/Bangkok",
                "Accept": "*/*",
                "Origin": "https://discord.com",
                "Sec-Fetch-Site": "same-origin",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Dest": "empty",
                "Referer": "",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US,en;q=0.9",
                "Cookie": ""
            }

            await fetch(host+api,{
                "method": "PATCH",
                "headers": headers,
                "body": jsonString
            }).then((res)=>res.json()).then((result)=>{console.log(result)})
            if (names == NAME) {
                names = "";
            }
            await delay(timeToDelay);
        }
    }
})()
