let mainscene = sGame.createScene('mainscene');
mainscene.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // タッチされたら
        if (gTouchOnOff) {

        }
    }
);
let jimen = sGame.createRectDemo('jimen', { 'res': null, 'size': { 'w': '360', 'h': '10' }, 'pos': { 'x': '180', 'y': '640' }, 'scale': { 'x': '1', 'y': '1' }, 'alpha': '1', 'angle': '0', 'wp': { 'onWorld': 'true', 'fixedRotation': 'false', 'density': '1.0', 'friction': '0.5', 'restitution': '0.5', 'bodytype': '0' }, 'shape': { 'color': '#00FF00', 'fill': 'false', 'line': '3' } });
let polla = sGame.createRectDemo('polla', { 'res': null, 'size': { 'w': '50', 'h': '50' }, 'pos': { 'x': '100', 'y': '500' }, 'scale': { 'x': '1', 'y': '1' }, 'alpha': '1', 'angle': '0', 'wp': { 'onWorld': 'true', 'fixedRotation': 'false', 'density': '1.0', 'friction': '0.3', 'restitution': '0.5', 'bodytype': '2' }, 'shape': { 'color': '#00FF00', 'fill': 'false', 'line': '3' } });
let pollb = sGame.createRectDemo('pollb', { 'res': null, 'size': { 'w': '50', 'h': '50' }, 'pos': { 'x': '250', 'y': '500' }, 'scale': { 'x': '1', 'y': '1' }, 'alpha': '1', 'angle': '0', 'wp': { 'onWorld': 'true', 'fixedRotation': 'false', 'density': '1.0', 'friction': '0.3', 'restitution': '0.5', 'bodytype': '2' }, 'shape': { 'color': '#00FF00', 'fill': 'false', 'line': '3' } });
let ue = sGame.createRectDemo('ue', { 'res': null, 'size': { 'w': '250', 'h': '10' }, 'pos': { 'x': '180', 'y': '400' }, 'scale': { 'x': '1', 'y': '1' }, 'alpha': '1', 'angle': '0', 'wp': { 'onWorld': 'true', 'fixedRotation': 'false', 'density': '1.0', 'friction': '0.3', 'restitution': '0.5', 'bodytype': '2' }, 'shape': { 'color': '#00FF00', 'fill': 'false', 'line': '3' } });
polla.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // シーンがタッチされたら
        if (gTouchOnOff) {
            // ワールド非依存
            // 自分自身がタッチされたら
            //if(this.isHit(gTouchOffX, gTouchOffY, 1, 1)){
            //}
            // ターゲットデモと触れているかの判定
            //if(this.isHitDemo(/*scene.demo["target"]*/){	
            //}
            // ワールド依存
            // 自分自身がタッチされたら
            if (this.existWorldPoint(scene, gTouchOffX, gTouchOffY)) {
                this.size.h += 10;
                this.pos.y -= 5;
                this.updateBodyFixture();
                // 力加える
                this.bodyApplyForce(0, 5, this.pos.x, (this.pos.y - this.size.getHelfH()));
            }
            // ターゲットデモと触れているかの判定
            //if(this.contactDemoInWorld(scene, /*scene.demo["target"]*/)){
            //}
        }
    }
);
pollb.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // シーンがタッチされたら
        if (gTouchOnOff) {
            // ワールド非依存
            // 自分自身がタッチされたら
            //if(this.isHit(gTouchOffX, gTouchOffY, 1, 1)){
            //}
            // ターゲットデモと触れているかの判定
            //if(this.isHitDemo(/*scene.demo["target"]*/){	
            //}
            // ワールド依存
            // 自分自身がタッチされたら
            if (this.existWorldPoint(scene, gTouchOffX, gTouchOffY)) {
                this.size.h += 10;
                this.pos.y -= 5;
                this.updateBodyFixture();
                // 力加える
                this.bodyApplyForce(0, 5, this.pos.x, (this.pos.y - this.size.getHelfH()));
            }
            // ターゲットデモと触れているかの判定
            //if(this.contactDemoInWorld(scene, /*scene.demo["target"]*/)){
            //}
        }
    }
);

mainscene.addDemo(jimen);
mainscene.addDemo(polla);
mainscene.addDemo(pollb);
mainscene.addDemo(ue);
mainscene.worldOn(10);
sGame.pushScene(mainscene);
