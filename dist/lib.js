// function area
function csv(item){
    return item.split(',')  .map(x=>x.trim()).filter(x=>x);
}
function ssv(item){
    return item.split(/\s+/).map(x=>x.trim()).filter(x=>x);
}
function print_log(handle){dog(handle, 1);}
function print_bug(handle){dog(handle, 0);}
function dog(handle, isBug){
    try {
        throw new Error(); // catch right now!
    } catch (e) {
        errorMSG = e.stack.split('\n').slice(2); // print error log
        let line='', logs='', file='', sysMsg='';
        for (s of errorMSG){
            let MSGLine  = s.split(/[\\\/:]/);
            let funcName = s.split(/\s+/)[2]; if(s.includes('(')==0)funcName='';
            if (MSGLine.length < 3)continue;
            line = MSGLine[MSGLine.length-2];
            file = MSGLine[MSGLine.length-3];
            
            if( file.endsWith('html') || csv('server.js,main.js,index.html').includes(file)){
                logs = `${logs} <- \x1b[33m${(funcName+'(')}\x1b[34m${file+':'+line}\x1b[33m${')'}\x1b[0m`
                
            } 
        }
        if (isBug){
            sysMsg = `\x1b[41msystem Error ||| \x1b[0m"`;
            console.error(sysMsg + logs + ':' + handle);
        }
        else{
            sysMsg = `\x1b[42msystem ||| \x1b[0m"`;
            console.log(sysMsg + logs + ':' + handle);
        }
    }
};



module.exports={print_log, print_bug,csv,ssv};