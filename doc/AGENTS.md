修改代码：game.js
请找到 showGuide 函数，并将 this.guideSteps 数组修改如下（我为你新增了 第 6 步）：
```js
// 在 game.js 中找到 showGuide() 函数
    showGuide() {
        this.guideSteps = [
            {
                selector: "#status-panel",
                scene: "office",
                text: "👋 欢迎入职！\n展览工作和学业都会消耗【精力值】和【愉悦值】。\n【存款】由工资和项目奖金组成，用于个人消费和交学费。\n注意：【公款/经费】只能用于展览设计，不能混用哦！"
            },
            {
                selector: ".leisure-section",
                scene: "office",
                text: "☕ 摸鱼休息区\n工作累了可以在这里【闭目养神】或【聊八卦】。\n这是恢复精力值和愉悦值的主要途径（虽然偶尔会被抓包）。"
            },
            {
                selector: ".shop-section",
                scene: "office",
                text: "🛒 文创商店\n如果精力实在不够用，可以花点【个人存款】在这里买咖啡或套餐。\n这属于“钞能力”快速回血手段！"
            },
            {
                selector: "#research-block",
                scene: "office",
                text: "🔬 科研项目\n每年【Q1 (第一季度)】开启申报，【Q4】公布结果。\n成功立项能获得大量经费和声望，别错过窗口期！"
            },
            {
                selector: "#exhibit-block",
                scene: "office",
                text: "🏛️ 展览策划\n这是你的核心工作！\n点击【申请新展览】开始项目，随后推进搜集、研究、设计等环节。\n所有工作都会消耗精力，请量力而行。"
            },
            // ========== 【新增】行政任务引导 ==========
            {
                selector: "#panel-admin", // 指向右侧行政面板
                scene: "office",
                text: "🎲 行政甩锅 (高能预警)\n每个季度领导都会派发【行政杂活】。\n你可以点击【掷骰子】尝试甩锅：\n👉 点数≥3：甩锅成功，无事发生。\n👉 点数<3：甩锅失败，【展览面板】将被锁定一季度，无法推进工作！"
            },
            // ========================================
            {
                selector: "#tab-university",
                scene: "office",
                text: "🎓 大学导航\n点击这里可以切换到【大学/进修】界面。\n提升学历是当上馆长的必经之路。"
            },
            {
                selector: "#btn-study-course", 
                scene: "university",
                text: "📚 进修课程\n在这里可以选择短期课程进修，消耗金钱和精力，但能提升智商和声望。"
            },
            {
                selector: "#btn-apply-program", 
                scene: "university",
                text: "📜 学位申请\n只有每年的【Q2】可以申请硕士或博士！\n硕士学制3年，博士4年。记得攒够学费再来申请哦。"
            },
            {
                selector: "#tab-home",
                scene: "office", 
                text: "🏠 家庭系统\n（这部分还没来得及优化，大家可以忽略...）\n当你的存款超过1000万时，这里会自动解锁。"
            },
            {
                selector: "#btn-end-quarter",
                scene: "office",
                text: "🌙 结束季度\n当本季度没有体力或操作次数后，点击这里进入下一季度。\n工资会在此时发放，同时触发随机事件。"
            }
        ];
        
        // ... 后面的代码保持不变
        this.guideState = { index: 0 };
        this.renderGuideStep();
        if (!this._guideResizeHandler) {
            this._guideResizeHandler = () => {
                if (this.guideState) this.renderGuideStep(true);
            };
            window.addEventListener('resize', this._guideResizeHandler);
        }
    },
```