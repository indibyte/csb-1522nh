gdjs.ShareScoreCode = {};
gdjs.ShareScoreCode.GDGameTitleObjects1= [];
gdjs.ShareScoreCode.GDGameTitleObjects2= [];
gdjs.ShareScoreCode.GDGameTitleObjects3= [];
gdjs.ShareScoreCode.GDButtonShareObjects1= [];
gdjs.ShareScoreCode.GDButtonShareObjects2= [];
gdjs.ShareScoreCode.GDButtonShareObjects3= [];
gdjs.ShareScoreCode.GDWalletInputObjects1= [];
gdjs.ShareScoreCode.GDWalletInputObjects2= [];
gdjs.ShareScoreCode.GDWalletInputObjects3= [];
gdjs.ShareScoreCode.GDShareTextObjects1= [];
gdjs.ShareScoreCode.GDShareTextObjects2= [];
gdjs.ShareScoreCode.GDShareTextObjects3= [];
gdjs.ShareScoreCode.GDHigh_95Score_95txtObjects1= [];
gdjs.ShareScoreCode.GDHigh_95Score_95txtObjects2= [];
gdjs.ShareScoreCode.GDHigh_95Score_95txtObjects3= [];
gdjs.ShareScoreCode.GDSubmitObjects1= [];
gdjs.ShareScoreCode.GDSubmitObjects2= [];
gdjs.ShareScoreCode.GDSubmitObjects3= [];

gdjs.ShareScoreCode.conditionTrue_0 = {val:false};
gdjs.ShareScoreCode.condition0IsTrue_0 = {val:false};
gdjs.ShareScoreCode.condition1IsTrue_0 = {val:false};
gdjs.ShareScoreCode.condition2IsTrue_0 = {val:false};
gdjs.ShareScoreCode.conditionTrue_1 = {val:false};
gdjs.ShareScoreCode.condition0IsTrue_1 = {val:false};
gdjs.ShareScoreCode.condition1IsTrue_1 = {val:false};
gdjs.ShareScoreCode.condition2IsTrue_1 = {val:false};


gdjs.ShareScoreCode.mapOfGDgdjs_46ShareScoreCode_46GDButtonShareObjects1Objects = Hashtable.newFrom({"ButtonShare": gdjs.ShareScoreCode.GDButtonShareObjects1});
gdjs.ShareScoreCode.mapOfGDgdjs_46ShareScoreCode_46GDButtonShareObjects1Objects = Hashtable.newFrom({"ButtonShare": gdjs.ShareScoreCode.GDButtonShareObjects1});
gdjs.ShareScoreCode.eventsList0 = function(runtimeScene) {

{


gdjs.ShareScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ShareScoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ShareScoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.ShareScoreCode.GDButtonShareObjects1, gdjs.ShareScoreCode.GDButtonShareObjects2);

{for(var i = 0, len = gdjs.ShareScoreCode.GDButtonShareObjects2.length ;i < len;++i) {
    gdjs.ShareScoreCode.GDButtonShareObjects2[i].setAnimationName("StartPressed");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "powerUp2.mp3", false, 100, 1);
}}

}


{


gdjs.ShareScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ShareScoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ShareScoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WalletInput"), gdjs.ShareScoreCode.GDWalletInputObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "9eb1e62e-76cd-4f83-9dba-7e4e1821f6f4", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), (( gdjs.ShareScoreCode.GDWalletInputObjects1.length === 0 ) ? "" :gdjs.ShareScoreCode.GDWalletInputObjects1[0].getString()));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "9eb1e62e-76cd-4f83-9dba-7e4e1821f6f4", true);
}}

}


};gdjs.ShareScoreCode.eventsList1 = function(runtimeScene) {

{


gdjs.ShareScoreCode.condition0IsTrue_0.val = false;
gdjs.ShareScoreCode.condition1IsTrue_0.val = false;
{
gdjs.ShareScoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.ShareScoreCode.condition0IsTrue_0.val ) {
{
{gdjs.ShareScoreCode.conditionTrue_1 = gdjs.ShareScoreCode.condition1IsTrue_0;
gdjs.ShareScoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8619628);
}
}}
if (gdjs.ShareScoreCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Taco12.ogg", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShare"), gdjs.ShareScoreCode.GDButtonShareObjects1);

gdjs.ShareScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ShareScoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShareScoreCode.mapOfGDgdjs_46ShareScoreCode_46GDButtonShareObjects1Objects, runtimeScene, true, true);
}if (gdjs.ShareScoreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShareScoreCode.GDButtonShareObjects1 */
{for(var i = 0, len = gdjs.ShareScoreCode.GDButtonShareObjects1.length ;i < len;++i) {
    gdjs.ShareScoreCode.GDButtonShareObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonShare"), gdjs.ShareScoreCode.GDButtonShareObjects1);

gdjs.ShareScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ShareScoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShareScoreCode.mapOfGDgdjs_46ShareScoreCode_46GDButtonShareObjects1Objects, runtimeScene, true, false);
}if (gdjs.ShareScoreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShareScoreCode.GDButtonShareObjects1 */
{for(var i = 0, len = gdjs.ShareScoreCode.GDButtonShareObjects1.length ;i < len;++i) {
    gdjs.ShareScoreCode.GDButtonShareObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.ShareScoreCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ShareScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ShareScoreCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("save", "high_score");
}if (gdjs.ShareScoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("High_Score_txt"), gdjs.ShareScoreCode.GDHigh_95Score_95txtObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("save", "high_score", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.ShareScoreCode.GDHigh_95Score_95txtObjects1.length ;i < len;++i) {
    gdjs.ShareScoreCode.GDHigh_95Score_95txtObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};

gdjs.ShareScoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShareScoreCode.GDGameTitleObjects1.length = 0;
gdjs.ShareScoreCode.GDGameTitleObjects2.length = 0;
gdjs.ShareScoreCode.GDGameTitleObjects3.length = 0;
gdjs.ShareScoreCode.GDButtonShareObjects1.length = 0;
gdjs.ShareScoreCode.GDButtonShareObjects2.length = 0;
gdjs.ShareScoreCode.GDButtonShareObjects3.length = 0;
gdjs.ShareScoreCode.GDWalletInputObjects1.length = 0;
gdjs.ShareScoreCode.GDWalletInputObjects2.length = 0;
gdjs.ShareScoreCode.GDWalletInputObjects3.length = 0;
gdjs.ShareScoreCode.GDShareTextObjects1.length = 0;
gdjs.ShareScoreCode.GDShareTextObjects2.length = 0;
gdjs.ShareScoreCode.GDShareTextObjects3.length = 0;
gdjs.ShareScoreCode.GDHigh_95Score_95txtObjects1.length = 0;
gdjs.ShareScoreCode.GDHigh_95Score_95txtObjects2.length = 0;
gdjs.ShareScoreCode.GDHigh_95Score_95txtObjects3.length = 0;
gdjs.ShareScoreCode.GDSubmitObjects1.length = 0;
gdjs.ShareScoreCode.GDSubmitObjects2.length = 0;
gdjs.ShareScoreCode.GDSubmitObjects3.length = 0;

gdjs.ShareScoreCode.eventsList1(runtimeScene);
return;

}

gdjs['ShareScoreCode'] = gdjs.ShareScoreCode;
