(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const H=!0,T="Online Retail II Demo Cohort (Synthetic)",O=[{CustomerID:12346,Frequency:2,Recency:285,AverageOrderValue:845.2,ProductDiversity:28,CustomerTenure:325,AveragePurchaseInterval:40,HasPurchaseInterval:1},{CustomerID:12415,Frequency:3,Recency:260,AverageOrderValue:1240.5,ProductDiversity:34,CustomerTenure:310,AveragePurchaseInterval:25,HasPurchaseInterval:1},{CustomerID:12748,Frequency:2,Recency:295,AverageOrderValue:620,ProductDiversity:22,CustomerTenure:315,AveragePurchaseInterval:20,HasPurchaseInterval:1},{CustomerID:13089,Frequency:3,Recency:250,AverageOrderValue:530.75,ProductDiversity:30,CustomerTenure:290,AveragePurchaseInterval:20,HasPurchaseInterval:1},{CustomerID:14088,Frequency:2,Recency:275,AverageOrderValue:710.3,ProductDiversity:24,CustomerTenure:340,AveragePurchaseInterval:65,HasPurchaseInterval:1},{CustomerID:14646,Frequency:3,Recency:245,AverageOrderValue:1820,ProductDiversity:40,CustomerTenure:360,AveragePurchaseInterval:57.5,HasPurchaseInterval:1},{CustomerID:15311,Frequency:2,Recency:310,AverageOrderValue:590.9,ProductDiversity:18,CustomerTenure:330,AveragePurchaseInterval:20,HasPurchaseInterval:1},{CustomerID:16029,Frequency:2,Recency:280,AverageOrderValue:920,ProductDiversity:26,CustomerTenure:280,AveragePurchaseInterval:0,HasPurchaseInterval:0},{CustomerID:12347,Frequency:7,Recency:14,AverageOrderValue:412.5,ProductDiversity:104,CustomerTenure:315,AveragePurchaseInterval:48.2,HasPurchaseInterval:1},{CustomerID:12359,Frequency:16,Recency:8,AverageOrderValue:580.4,ProductDiversity:132,CustomerTenure:345,AveragePurchaseInterval:22.5,HasPurchaseInterval:1},{CustomerID:12362,Frequency:11,Recency:12,AverageOrderValue:495.2,ProductDiversity:92,CustomerTenure:295,AveragePurchaseInterval:28.3,HasPurchaseInterval:1},{CustomerID:12431,Frequency:15,Recency:19,AverageOrderValue:610,ProductDiversity:145,CustomerTenure:355,AveragePurchaseInterval:24,HasPurchaseInterval:1},{CustomerID:12471,Frequency:22,Recency:5,AverageOrderValue:390.8,ProductDiversity:180,CustomerTenure:365,AveragePurchaseInterval:16.4,HasPurchaseInterval:1},{CustomerID:12474,Frequency:13,Recency:16,AverageOrderValue:340.5,ProductDiversity:86,CustomerTenure:270,AveragePurchaseInterval:21.2,HasPurchaseInterval:1},{CustomerID:12540,Frequency:19,Recency:9,AverageOrderValue:460.1,ProductDiversity:125,CustomerTenure:335,AveragePurchaseInterval:18.1,HasPurchaseInterval:1},{CustomerID:12621,Frequency:8,Recency:22,AverageOrderValue:520.3,ProductDiversity:98,CustomerTenure:285,AveragePurchaseInterval:38.6,HasPurchaseInterval:1},{CustomerID:12681,Frequency:17,Recency:11,AverageOrderValue:710,ProductDiversity:150,CustomerTenure:360,AveragePurchaseInterval:21.8,HasPurchaseInterval:1},{CustomerID:12720,Frequency:9,Recency:25,AverageOrderValue:385,ProductDiversity:82,CustomerTenure:240,AveragePurchaseInterval:29.3,HasPurchaseInterval:1},{CustomerID:12744,Frequency:6,Recency:18,AverageOrderValue:430.2,ProductDiversity:64,CustomerTenure:190,AveragePurchaseInterval:34.4,HasPurchaseInterval:1},{CustomerID:12820,Frequency:3,Recency:105,AverageOrderValue:680,ProductDiversity:14,CustomerTenure:180,AveragePurchaseInterval:37.5,HasPurchaseInterval:1},{CustomerID:12901,Frequency:4,Recency:95,AverageOrderValue:950.4,ProductDiversity:16,CustomerTenure:210,AveragePurchaseInterval:38.3,HasPurchaseInterval:1},{CustomerID:13018,Frequency:3,Recency:110,AverageOrderValue:740,ProductDiversity:12,CustomerTenure:150,AveragePurchaseInterval:20,HasPurchaseInterval:1},{CustomerID:13263,Frequency:3,Recency:115,AverageOrderValue:560.5,ProductDiversity:15,CustomerTenure:190,AveragePurchaseInterval:37.5,HasPurchaseInterval:1},{CustomerID:13408,Frequency:4,Recency:90,AverageOrderValue:810,ProductDiversity:18,CustomerTenure:225,AveragePurchaseInterval:45,HasPurchaseInterval:1},{CustomerID:13576,Frequency:3,Recency:120,AverageOrderValue:630.25,ProductDiversity:16,CustomerTenure:175,AveragePurchaseInterval:27.5,HasPurchaseInterval:1},{CustomerID:13798,Frequency:4,Recency:85,AverageOrderValue:720,ProductDiversity:19,CustomerTenure:240,AveragePurchaseInterval:51.7,HasPurchaseInterval:1},{CustomerID:13880,Frequency:4,Recency:85,AverageOrderValue:265,ProductDiversity:42,CustomerTenure:210,AveragePurchaseInterval:41.7,HasPurchaseInterval:1},{CustomerID:14096,Frequency:4,Recency:90,AverageOrderValue:285.5,ProductDiversity:46,CustomerTenure:230,AveragePurchaseInterval:46.7,HasPurchaseInterval:1},{CustomerID:14298,Frequency:4,Recency:75,AverageOrderValue:245,ProductDiversity:50,CustomerTenure:260,AveragePurchaseInterval:61.7,HasPurchaseInterval:1},{CustomerID:14426,Frequency:3,Recency:110,AverageOrderValue:240,ProductDiversity:38,CustomerTenure:195,AveragePurchaseInterval:42.5,HasPurchaseInterval:1},{CustomerID:14527,Frequency:4,Recency:95,AverageOrderValue:295,ProductDiversity:45,CustomerTenure:220,AveragePurchaseInterval:41.7,HasPurchaseInterval:1},{CustomerID:14606,Frequency:4,Recency:100,AverageOrderValue:220,ProductDiversity:48,CustomerTenure:250,AveragePurchaseInterval:50,HasPurchaseInterval:1},{CustomerID:14733,Frequency:3,Recency:115,AverageOrderValue:280,ProductDiversity:40,CustomerTenure:180,AveragePurchaseInterval:32.5,HasPurchaseInterval:1},{CustomerID:14911,Frequency:5,Recency:70,AverageOrderValue:275,ProductDiversity:55,CustomerTenure:275,AveragePurchaseInterval:51.2,HasPurchaseInterval:1},{CustomerID:15005,Frequency:3,Recency:105,AverageOrderValue:250,ProductDiversity:39,CustomerTenure:205,AveragePurchaseInterval:50,HasPurchaseInterval:1},{CustomerID:15159,Frequency:4,Recency:80,AverageOrderValue:290,ProductDiversity:44,CustomerTenure:240,AveragePurchaseInterval:53.3,HasPurchaseInterval:1},{CustomerID:15290,Frequency:1,Recency:290,AverageOrderValue:85,ProductDiversity:8,CustomerTenure:290,AveragePurchaseInterval:0,HasPurchaseInterval:0},{CustomerID:15453,Frequency:1,Recency:315,AverageOrderValue:120,ProductDiversity:12,CustomerTenure:315,AveragePurchaseInterval:0,HasPurchaseInterval:0},{CustomerID:15601,Frequency:2,Recency:240,AverageOrderValue:145,ProductDiversity:14,CustomerTenure:280,AveragePurchaseInterval:40,HasPurchaseInterval:1},{CustomerID:15838,Frequency:1,Recency:340,AverageOrderValue:65.5,ProductDiversity:6,CustomerTenure:340,AveragePurchaseInterval:0,HasPurchaseInterval:0},{CustomerID:16180,Frequency:2,Recency:260,AverageOrderValue:180,ProductDiversity:18,CustomerTenure:300,AveragePurchaseInterval:40,HasPurchaseInterval:1},{CustomerID:16360,Frequency:1,Recency:275,AverageOrderValue:95,ProductDiversity:10,CustomerTenure:275,AveragePurchaseInterval:0,HasPurchaseInterval:0},{CustomerID:16549,Frequency:1,Recency:320,AverageOrderValue:110,ProductDiversity:9,CustomerTenure:320,AveragePurchaseInterval:0,HasPurchaseInterval:0},{CustomerID:16767,Frequency:2,Recency:250,AverageOrderValue:160,ProductDiversity:15,CustomerTenure:310,AveragePurchaseInterval:60,HasPurchaseInterval:1},{CustomerID:17097,Frequency:1,Recency:355,AverageOrderValue:75,ProductDiversity:7,CustomerTenure:355,AveragePurchaseInterval:0,HasPurchaseInterval:0},{CustomerID:17315,Frequency:2,Recency:235,AverageOrderValue:195,ProductDiversity:20,CustomerTenure:290,AveragePurchaseInterval:55,HasPurchaseInterval:1},{CustomerID:17504,Frequency:1,Recency:305,AverageOrderValue:90,ProductDiversity:8,CustomerTenure:305,AveragePurchaseInterval:0,HasPurchaseInterval:0},{CustomerID:17841,Frequency:2,Recency:270,AverageOrderValue:140,ProductDiversity:16,CustomerTenure:320,AveragePurchaseInterval:50,HasPurchaseInterval:1},{CustomerID:18077,Frequency:1,Recency:330,AverageOrderValue:115,ProductDiversity:11,CustomerTenure:330,AveragePurchaseInterval:0,HasPurchaseInterval:0},{CustomerID:18283,Frequency:2,Recency:220,AverageOrderValue:175,ProductDiversity:22,CustomerTenure:260,AveragePurchaseInterval:40,HasPurchaseInterval:1}],_={coefficients:[{feature:"Log_Frequency",label:"Log(1 + Purchase Frequency)",originalMetric:"Orders / Frequency",coefficient:.759,direction:"positive",signalStrength:"Strongest positive predictive signal",description:"Customers with higher historical order counts exhibit significantly higher odds of repeat purchasing."},{feature:"Recency",label:"Recency (Days Since Last Order)",originalMetric:"Days Since Last Purchase",coefficient:-.505,direction:"negative",signalStrength:"Strongest negative predictive signal",description:"Longer elapsed time since the most recent purchase sharply reduces repeat purchase probability."},{feature:"Log_AverageOrderValue",label:"Log(1 + Average Order Value)",originalMetric:"Average Order Value (£)",coefficient:.1946,direction:"positive",signalStrength:"Moderate positive signal",description:"Higher average spend per order positively associates with customer commitment and retention."},{feature:"Log_ProductDiversity",label:"Log(1 + Product Diversity)",originalMetric:"Unique Products Purchased",coefficient:.1893,direction:"positive",signalStrength:"Moderate positive signal",description:"Purchasing a broader variety of catalogue items is positively associated with future loyalty."},{feature:"CustomerTenure",label:"Customer Relationship Tenure (Days)",originalMetric:"Tenure (Days)",coefficient:.1073,direction:"positive",signalStrength:"Modest positive signal",description:"Longer relationship duration provides a slight positive baseline for ongoing repeat activity."},{feature:"Log_AveragePurchaseInterval",label:"Log(1 + Avg Purchase Interval)",originalMetric:"Avg Days Between Purchases",coefficient:-.0359,direction:"negative",signalStrength:"Slight negative signal",description:"Longer inter-purchase spacing slightly dampens the probability of an imminent future transaction."},{feature:"HasPurchaseInterval",label:"Has Repeat Purchase Interval Flag",originalMetric:"Multiple Order History",coefficient:-.0072,direction:"negative",signalStrength:"Minimal adjustment",description:"Binary adjustment accounting for the presence of a calculable inter-order interval."}]},L={means:{Log_Frequency:1.352,Recency:94.65,Log_AverageOrderValue:5.21,Log_ProductDiversity:3.645,CustomerTenure:202.4,Log_AveragePurchaseInterval:2.82,HasPurchaseInterval:.655},scales:{Log_Frequency:.765,Recency:87.12,Log_AverageOrderValue:.942,Log_ProductDiversity:1.148,CustomerTenure:112.35,Log_AveragePurchaseInterval:1.415,HasPurchaseInterval:.475}},F=.2974;function q(t){return 1/(1+Math.exp(-t))}function N(t){const r=Math.max(1,Number(t.Frequency)||1),i=Math.max(0,Number(t.Recency)||0),n=Math.max(0,Number(t.AverageOrderValue)||0),e=Math.max(1,Number(t.ProductDiversity)||1),a=Math.max(0,Number(t.CustomerTenure)||0);let s=Number(t.AveragePurchaseInterval),o=t.HasPurchaseInterval!==void 0?Number(t.HasPurchaseInterval)===1?1:0:r>1&&s>0?1:0;return(isNaN(s)||s<=0)&&(s=0,o=0),{Log_Frequency:Math.log1p(r),Recency:i,Log_AverageOrderValue:Math.log1p(n),Log_ProductDiversity:Math.log1p(e),CustomerTenure:a,Log_AveragePurchaseInterval:Math.log1p(s),HasPurchaseInterval:o}}function B(t){const r={};for(const[i,n]of Object.entries(t)){const e=L.means[i]||0,a=L.scales[i]||1;r[i]=(n-e)/a}return r}function U(t){const r=N(t),i=B(r);let n=F;const e={};for(const s of _.coefficients){const o=s.feature,l=i[o],d=s.coefficient,u=d*l;n+=u,e[o]={zScore:l,weight:d,contribution:u}}const a=q(n);return{probability:a,percentage:(a*100).toFixed(1),logit:n,contributions:e,rawFeatures:r,standardized:i}}const W={LOW_REPEAT_THRESHOLD:.4,HIGH_REPEAT_THRESHOLD:.7,SEGMENTS:{HIGH_VALUE_AT_RISK:{id:"HIGH_VALUE_AT_RISK",label:"High-Value At-Risk",shortCode:"AT-RISK",badgeClass:"badge-at-risk",color:"#dc2626",bgLight:"#fef2f2",border:"#fecaca",proposedAction:"Re-engagement campaign / retention offer",actionRationale:"Customer represents substantial historical revenue but shows waning repeat probability. Priority intervention recommended.",channel:"Personalized VIP Outreach / Time-sensitive Incentive"},LOYAL_ACTIVE:{id:"LOYAL_ACTIVE",label:"Loyal / Active",shortCode:"LOYAL",badgeClass:"badge-loyal",color:"#059669",bgLight:"#ecfdf5",border:"#a7f3d0",proposedAction:"Loyalty recognition / relationship maintenance",actionRationale:"Customer maintains strong recency and high predicted repeat likelihood. Focus on appreciation without margin-eroding discounts.",channel:"Loyalty Rewards / Early Access to New Collections"},CROSS_SELL_OPPORTUNITY:{id:"CROSS_SELL_OPPORTUNITY",label:"Cross-Sell Opportunity",shortCode:"CROSS-SELL",badgeClass:"badge-cross-sell",color:"#4f46e5",bgLight:"#eef2ff",border:"#c7d2fe",proposedAction:"Personalized product recommendations",actionRationale:"Customer spends substantially above median per order but concentrates purchases in narrow product categories.",channel:"Category Expansion Recommendations / Bundled Offers"},MONITOR_NURTURE:{id:"MONITOR_NURTURE",label:"Monitor / Nurture",shortCode:"MONITOR",badgeClass:"badge-monitor",color:"#0284c7",bgLight:"#f0f9ff",border:"#bae6fd",proposedAction:"Continue normal engagement and monitoring",actionRationale:"Customer displays moderate repeat likelihood and stable metrics. No urgent intervention required; monitor for behavioural changes.",channel:"Standard Newsletter & Organic Lifecycle Communications"},LOWER_PRIORITY:{id:"LOWER_PRIORITY",label:"Lower Priority",shortCode:"LOW-PRIORITY",badgeClass:"badge-lower-priority",color:"#64748b",bgLight:"#f8fafc",border:"#e2e8f0",proposedAction:"Lower-cost communication",actionRationale:"Low repeat likelihood combined with below-median historical order value indicates limited commercial return on costly marketing spend.",channel:"Automated Digital Drip / Low-cost Marketing Channels"}}};function z(t,r,i={}){const{LOW_REPEAT_THRESHOLD:n,HIGH_REPEAT_THRESHOLD:e,SEGMENTS:a}=W,s=Number(r.AverageOrderValue)||0,o=Number(r.ProductDiversity)||1,l=i.medianAOV||300,d=i.medianProductDiversity||45,u=s>=l,g=o<d;return t<n&&u?{...a.HIGH_VALUE_AT_RISK,priorityRank:1,urgency:"Immediate"}:t>=e?{...a.LOYAL_ACTIVE,priorityRank:2,urgency:"Scheduled"}:t>=n&&t<e&&u&&g?{...a.CROSS_SELL_OPPORTUNITY,priorityRank:3,urgency:"Targeted"}:t>=n&&t<e?{...a.MONITOR_NURTURE,priorityRank:4,urgency:"Passive"}:{...a.LOWER_PRIORITY,priorityRank:5,urgency:"Low-cost"}}function G(t,r,i,n={}){const e=(r*100).toFixed(1)+"%",a=Number(t.Frequency)||1,s=Number(t.Recency)||0,o=Number(t.AverageOrderValue)||0,l=Number(t.ProductDiversity)||1;Number(t.CustomerTenure);const d=n.medianAOV||300,u=n.medianRecency||75;n.medianFrequency;const g=n.medianProductDiversity||45,y=o>=d?"above the customer median":"below the customer median",P=s>u?"a longer period has passed since the most recent purchase":"recent purchasing activity is observed";switch(i.id){case"HIGH_VALUE_AT_RISK":return`This customer has historically generated substantial value, maintaining an Average Order Value of £${o.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})} (${y}) with ${a} historical orders. However, ${s} days have elapsed since their last purchase (${P}). In line with the negative coefficient for Recency in the Logistic Regression model, this inactivity significantly depresses the future repeat purchase estimate to ${e}. Under our prototype business rules, this customer represents an immediate retention priority for a re-engagement campaign.`;case"LOYAL_ACTIVE":return`This customer displays strong, consistent engagement with ${a} completed orders and a recent transaction just ${s} days ago. Given that purchase frequency is the strongest positive predictive signal in the model and recency is favorable, the model projects a high repeat purchase probability of ${e}. The proposed action focuses on loyalty recognition and relationship maintenance rather than margin-sacrificing discounts.`;case"CROSS_SELL_OPPORTUNITY":return`This customer exhibits healthy spending with an Average Order Value of £${o.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})} (${y}), but has explored only ${l} unique product items (below the median of ${g}). The estimated repeat probability of ${e} places them in a stable moderate bracket. Personalized cross-sell recommendations could broaden catalogue adoption and strengthen customer lifetime value.`;case"MONITOR_NURTURE":return`This customer shows balanced behavioural metrics across ${a} orders and an elapsed time of ${s} days since their last visit. Their predicted repeat purchase probability of ${e} sits safely within the middle tier. Continued monitoring and routine lifecycle communications are recommended to maintain engagement without unnecessary promotional expense.`;case"LOWER_PRIORITY":default:return`With an Average Order Value of £${o.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})} (${y}) and ${s} days since the last order, this customer is estimated to have a modest repeat probability of ${e}. Because expected return from intensive manual intervention is low, the proposed decision is automated, lower-cost digital communication.`}}class Y{constructor(){this.isDemoMode=H,this.dataSourceName=T,this.rawCustomers=[...O],this.processedCustomers=[],this.benchmarks={},this.kpis={},this.listeners=[],this.recalculatePortfolio()}calculateMedian(r){if(!r||r.length===0)return 0;const i=[...r].sort((e,a)=>e-a),n=Math.floor(i.length/2);return i.length%2===0?(i[n-1]+i[n])/2:i[n]}derivePortfolioBenchmarks(){const r=this.rawCustomers.map(s=>Number(s.AverageOrderValue)||0),i=this.rawCustomers.map(s=>Number(s.ProductDiversity)||1),n=this.rawCustomers.map(s=>Number(s.Recency)||0),e=this.rawCustomers.map(s=>Number(s.Frequency)||1),a=this.rawCustomers.map(s=>Number(s.CustomerTenure)||0);this.benchmarks={medianAOV:this.calculateMedian(r),medianProductDiversity:this.calculateMedian(i),medianRecency:this.calculateMedian(n),medianFrequency:this.calculateMedian(e),medianTenure:this.calculateMedian(a)}}recalculatePortfolio(){this.derivePortfolioBenchmarks(),this.processedCustomers=this.rawCustomers.map(r=>{const i=U(r),n=z(i.probability,r,this.benchmarks),e=G(r,i.probability,n,this.benchmarks);return{...r,prediction:i,repeatProbability:i.probability,probabilityFormatted:i.percentage+"%",segment:n,proposedAction:n.proposedAction,explanation:e}}),this.computeKPIs(),this.notifyListeners()}computeKPIs(){const r=this.processedCustomers.length;if(r===0){this.kpis={totalCustomers:0,highValueAtRiskCount:0,highValueAtRiskPct:"0.0%",loyalActiveCount:0,loyalActivePct:"0.0%",crossSellCount:0,monitorNurtureCount:0,lowerPriorityCount:0,averageRepeatProbability:0,averageRepeatProbabilityFormatted:"0.0%",segmentCounts:{}};return}let i=0,n=0,e=0,a=0,s=0,o=0;for(const d of this.processedCustomers)switch(o+=d.repeatProbability,d.segment.id){case"HIGH_VALUE_AT_RISK":i++;break;case"LOYAL_ACTIVE":n++;break;case"CROSS_SELL_OPPORTUNITY":e++;break;case"MONITOR_NURTURE":a++;break;case"LOWER_PRIORITY":default:s++;break}const l=o/r;this.kpis={totalCustomers:r,highValueAtRiskCount:i,highValueAtRiskPct:(i/r*100).toFixed(1)+"%",loyalActiveCount:n,loyalActivePct:(n/r*100).toFixed(1)+"%",crossSellCount:e,monitorNurtureCount:a,lowerPriorityCount:s,averageRepeatProbability:l,averageRepeatProbabilityFormatted:(l*100).toFixed(1)+"%",segmentCounts:{HIGH_VALUE_AT_RISK:i,LOYAL_ACTIVE:n,CROSS_SELL_OPPORTUNITY:e,MONITOR_NURTURE:a,LOWER_PRIORITY:s}}}loadCustomData(r,i="Uploaded Customer Dataset"){if(!Array.isArray(r)||r.length===0)throw new Error("Invalid dataset: Expected a non-empty array of customer records.");this.rawCustomers=r,this.isDemoMode=!1,this.dataSourceName=i,this.recalculatePortfolio()}restoreDemoData(){this.rawCustomers=[...O],this.isDemoMode=!0,this.dataSourceName=T,this.recalculatePortfolio()}getAllCustomers(){return this.processedCustomers}getCustomerById(r){const i=String(r).trim();return this.processedCustomers.find(n=>String(n.CustomerID)===i)||null}getBenchmarks(){return this.benchmarks}getKPIs(){return this.kpis}subscribe(r){return this.listeners.push(r),()=>{this.listeners=this.listeners.filter(i=>i!==r)}}notifyListeners(){for(const r of this.listeners)try{r(this)}catch(i){console.error("Error in CustomerDataService listener:",i)}}}const C=new Y;function K(t){const r=Number(t)||0;return new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP",minimumFractionDigits:2,maximumFractionDigits:2}).format(r)}function j(t){const r=Math.round(Number(t)||0);return`${r} ${r===1?"day":"days"}`}function Q(t){const r=Math.round(Number(t)||0);return`${r} ${r===1?"order":"orders"}`}const x={segments:["Low","Medium","High","Very High"],actions:["Protect loyalty","Win back now","Grow customer value","Low-cost nurture","Monitor"],locations:["Non-UK","UK"],returnMin:0,returnMax:100,clvMin:0,clvMax:15400,activeTab:"happening",searchQuery:""};let c={...x},b=null;function f(t){return{HIGH_VALUE_AT_RISK:"Very High",LOYAL_ACTIVE:"High",CROSS_SELL_OPPORTUNITY:"Medium",MONITOR_NURTURE:"Medium",LOWER_PRIORITY:"Low"}[t]||"Low"}function h(t){return{HIGH_VALUE_AT_RISK:"Win back now",LOYAL_ACTIVE:"Protect loyalty",CROSS_SELL_OPPORTUNITY:"Grow customer value",MONITOR_NURTURE:"Monitor",LOWER_PRIORITY:"Low-cost nurture"}[t]||"Monitor"}function J(t){return t%3===0?"Non-UK":"UK"}function $(){return C.getAllCustomers().filter(r=>{const i=f(r.segment.id),n=h(r.segment.id),e=J(r.CustomerID),a=Math.round(r.repeatProbability*100),s=Math.round(r.AverageOrderValue*r.Frequency);if(!c.segments.includes(i)||!c.actions.includes(n)||!c.locations.includes(e)||a<c.returnMin||a>c.returnMax||s<c.clvMin||s>c.clvMax)return!1;if(c.searchQuery&&c.searchQuery.trim()!==""){const o=c.searchQuery.trim().toLowerCase().replace("#","");if(!String(r.CustomerID).toLowerCase().includes(o))return!1}return!0})}function X(){const t=document.getElementById("sidebar");if(!t)return;const r=["Low","Medium","High","Very High"],i=["Protect loyalty","Win back now","Grow customer value","Low-cost nurture","Monitor"],n=["Non-UK","UK"];t.innerHTML=`
    <div class="sidebar-header">
      <div class="sidebar-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#60a5fa;"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
        Business Filters
      </div>
      <button class="sidebar-reset-btn" id="reset-filters-btn" title="Reset all filters to defaults">
        ↺ Reset
      </button>
    </div>

    <!-- Customer value segment filter -->
    <div class="filter-group">
      <div class="filter-label">
        <span>Customer Value Segment</span>
        <span class="filter-hint">${c.segments.length}/${r.length}</span>
      </div>
      <div class="tag-select-box" id="seg-box" data-filter="segments">
        ${c.segments.map(e=>`
            <span class="seg-tag ${`tag-${e.toLowerCase().replace(" ","-")}`}" data-val="${e}">
              ${e} <span class="tag-x" data-remove="${e}" data-filter="segments">×</span>
            </span>
          `).join("")}
        <span class="tag-select-chevron">▾</span>
        <div class="tag-dropdown" id="seg-dropdown">
          ${r.map(e=>`
            <div class="dropdown-option ${c.segments.includes(e)?"selected":""}" data-val="${e}" data-filter="segments">
              ${e}
            </div>
          `).join("")}
        </div>
      </div>
    </div>

    <!-- Recommended action filter -->
    <div class="filter-group">
      <div class="filter-label">
        <span>Recommended Action</span>
        <span class="filter-hint">${c.actions.length}/${i.length}</span>
      </div>
      <div class="tag-select-box" id="action-box" data-filter="actions">
        ${c.actions.map(e=>`
            <span class="seg-tag ${{"Protect loyalty":"tag-protect","Win back now":"tag-winback","Grow customer value":"tag-grow","Low-cost nurture":"tag-nurture",Monitor:"tag-monitor"}[e]||"tag-monitor"}" data-val="${e}">
              ${e} <span class="tag-x" data-remove="${e}" data-filter="actions">×</span>
            </span>
          `).join("")}
        <span class="tag-select-chevron">▾</span>
        <div class="tag-dropdown" id="action-dropdown">
          ${i.map(e=>`
            <div class="dropdown-option ${c.actions.includes(e)?"selected":""}" data-val="${e}" data-filter="actions">
              ${e}
            </div>
          `).join("")}
        </div>
      </div>
    </div>

    <!-- Location filter -->
    <div class="filter-group">
      <div class="filter-label">
        <span>Location</span>
        <span class="filter-hint">${c.locations.length}/${n.length}</span>
      </div>
      <div class="tag-select-box" id="location-box" data-filter="locations">
        ${c.locations.map(e=>`
          <span class="seg-tag ${e==="UK"?"tag-uk":"tag-non-uk"}" data-val="${e}">
            ${e} <span class="tag-x" data-remove="${e}" data-filter="locations">×</span>
          </span>
        `).join("")}
        <span class="tag-select-chevron">▾</span>
        <div class="tag-dropdown" id="location-dropdown">
          ${n.map(e=>`
            <div class="dropdown-option ${c.locations.includes(e)?"selected":""}" data-val="${e}" data-filter="locations">
              ${e}
            </div>
          `).join("")}
        </div>
      </div>
    </div>

    <!-- Return likelihood range slider -->
    <div class="filter-group">
      <div class="filter-label">
        <span>Return Likelihood</span>
        <span class="range-badge">${c.returnMin}% – ${c.returnMax}%</span>
      </div>
      <div class="range-group">
        <input type="range" id="return-min-slider" min="0" max="100" step="1" value="${c.returnMin}" />
        <input type="range" id="return-max-slider" min="0" max="100" step="1" value="${c.returnMax}" />
        <div class="range-labels">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
    </div>

    <!-- Expected customer value range -->
    <div class="filter-group">
      <div class="filter-label">
        <span>Expected Customer Value</span>
        <span class="range-badge">£${c.clvMin.toLocaleString()} – £${c.clvMax.toLocaleString()}</span>
      </div>
      <div class="range-group">
        <input type="range" id="clv-min-slider" min="0" max="15400" step="100" value="${c.clvMin}" />
        <input type="range" id="clv-max-slider" min="0" max="15400" step="100" value="${c.clvMax}" />
        <div class="range-labels">
          <span>£0</span>
          <span>£7.5k</span>
          <span>£15.4k</span>
        </div>
      </div>
    </div>

    <!-- Demo indicator -->
    <div style="margin-top: auto; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.08);">
      <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.75rem; color:#60a5fa; font-weight:600;">
        <span style="width:7px;height:7px;background:#3b82f6;border-radius:50%;display:inline-block;box-shadow:0 0 8px #3b82f6;"></span>
        Active Dataset: Online Retail II
      </div>
      <div style="font-size:0.675rem; color:#94a3b8; margin-top:0.35rem; line-height:1.4;">
        Task 5 Standard Logistic Regression (ROC-AUC 75.7%)
      </div>
    </div>
  `,Z()}function Z(){const t=document.getElementById("reset-filters-btn");t&&t.addEventListener("click",a=>{a.stopPropagation(),c={...x,activeTab:c.activeTab},p()}),["seg-box","action-box","location-box"].forEach(a=>{const s=document.getElementById(a);s&&s.addEventListener("click",o=>{if(o.target.classList.contains("tag-x"))return;const l=a.replace("-box","-dropdown"),d=document.getElementById(l);d&&(d.classList.contains("open")?d.classList.remove("open"):(document.querySelectorAll(".tag-dropdown.open").forEach(u=>u.classList.remove("open")),d.classList.add("open")),o.stopPropagation())})}),document.addEventListener("click",()=>{document.querySelectorAll(".tag-dropdown.open").forEach(a=>a.classList.remove("open"))}),document.querySelectorAll(".tag-x").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const o=a.getAttribute("data-remove"),l=a.getAttribute("data-filter");c[l]&&(c[l]=c[l].filter(d=>d!==o),p())})}),document.querySelectorAll(".dropdown-option").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const o=a.getAttribute("data-val"),l=a.getAttribute("data-filter"),d=c[l];d.includes(o)?c[l]=d.filter(u=>u!==o):c[l]=[...d,o],p()})});const r=document.getElementById("return-min-slider"),i=document.getElementById("return-max-slider"),n=document.getElementById("clv-min-slider"),e=document.getElementById("clv-max-slider");r&&r.addEventListener("input",a=>{c.returnMin=parseInt(a.target.value),p()}),i&&i.addEventListener("input",a=>{c.returnMax=parseInt(a.target.value),p()}),n&&n.addEventListener("input",a=>{c.clvMin=parseInt(a.target.value),p()}),e&&e.addEventListener("input",a=>{c.clvMax=parseInt(a.target.value),p()})}function k(){const t=document.getElementById("main-content");if(!t)return;const r=$(),i=M(r);t.innerHTML=`
    <!-- Page Heading -->
    <header class="page-header-wrap">
      <h1 class="page-heading">Customer Priorities &amp; Revenue Opportunities</h1>
      <hr class="heading-underline" />
      <div class="page-subtitle-wrap">
        <p class="page-subtitle">
          Use past buying behaviour to decide who needs attention, what action to take, and where future revenue may come from.
        </p>
        <div class="filter-guide-pill">
          <span>⚡</span>
          <span>Dynamic Cohort: <strong>${r.length} customers</strong> match current filters</span>
        </div>
      </div>
    </header>

    <!-- Tab Navigation -->
    <nav class="tab-nav" id="tab-nav" role="tablist" aria-label="Dashboard Views">
      <button class="tab-btn ${c.activeTab==="happening"?"active":""}" data-tab="happening" role="tab" aria-selected="${c.activeTab==="happening"}">What is happening?</button>
      <button class="tab-btn ${c.activeTab==="attention"?"active":""}" data-tab="attention" role="tab" aria-selected="${c.activeTab==="attention"}">Who needs attention?</button>
      <button class="tab-btn ${c.activeTab==="todo"?"active":""}" data-tab="todo" role="tab" aria-selected="${c.activeTab==="todo"}">What should we do?</button>
      <button class="tab-btn ${c.activeTab==="numbers"?"active":""}" data-tab="numbers" role="tab" aria-selected="${c.activeTab==="numbers"}">What do the numbers mean?</button>
    </nav>

    <!-- TAB: What is happening? -->
    <div class="tab-content ${c.activeTab==="happening"?"active":""}" id="tab-happening">
      ${ee(r,i)}
    </div>

    <!-- TAB: Who needs attention? -->
    <div class="tab-content ${c.activeTab==="attention"?"active":""}" id="tab-attention">
      ${E(r,i)}
    </div>

    <!-- TAB: What should we do? -->
    <div class="tab-content ${c.activeTab==="todo"?"active":""}" id="tab-todo">
      ${re(r)}
    </div>

    <!-- TAB: What do the numbers mean? -->
    <div class="tab-content ${c.activeTab==="numbers"?"active":""}" id="tab-numbers">
      ${ae()}
    </div>

    <!-- Customer Detail Modal -->
    <div class="modal-overlay ${b?"open":""}" id="customer-modal" role="dialog" aria-modal="true">
      ${b?S(b):""}
    </div>
  `,V()}function M(t){const r=t.length,i=t.reduce((o,l)=>o+l.AverageOrderValue*l.Frequency,0),n=r>0?t.reduce((o,l)=>o+l.repeatProbability,0)/r:0,e=t.filter(o=>o.segment.id==="HIGH_VALUE_AT_RISK"||o.segment.id==="LOYAL_ACTIVE").length,a=t.filter(o=>o.segment.id==="HIGH_VALUE_AT_RISK").length,s=t.filter(o=>o.segment.id==="LOYAL_ACTIVE").length;return{n:r,totalClv:i,avgProb:n,valuable:e,atRisk:a,loyal:s}}function ee(t,r){const{n:i,totalClv:n,avgProb:e,atRisk:a,loyal:s}=r,o={};t.forEach(m=>{const v=f(m.segment.id);o[v]=(o[v]||0)+1});const l=["Very High","High","Medium","Low"],d={"Very High":"#6366f1",High:"#2563eb",Medium:"#10b981",Low:"#64748b"},u=Math.max(...Object.values(o),1),g={};t.forEach(m=>{const v=h(m.segment.id);g[v]=(g[v]||0)+1});const y=["Protect loyalty","Win back now","Grow customer value","Low-cost nurture","Monitor"],P=Math.max(...Object.values(g),1),R=n>=1e6?`£${(n/1e6).toFixed(2)}M`:`£${Math.round(n).toLocaleString()}`;return`
    <div class="section-heading-wrap">
      <h2 class="section-heading">Executive Management Overview</h2>
      <p class="section-description">
        This view turns past customer activity into a practical overview of likely future revenue.
        Adjust the filters on the left to focus on high-priority customer tiers.
      </p>
    </div>

    <!-- KPI Row -->
    <div class="kpi-row">
      <div class="kpi-card accent-indigo">
        <div>
          <div class="kpi-card-header">
            <span class="kpi-card-label">Customers In Cohort</span>
            <span class="kpi-info-icon" title="Total customers matching current active filters">ⓘ</span>
          </div>
          <div class="kpi-card-value">${i.toLocaleString()}</div>
        </div>
        <div class="kpi-card-sub">Filtered analytical sample</div>
      </div>

      <div class="kpi-card accent-emerald">
        <div>
          <div class="kpi-card-header">
            <span class="kpi-card-label">Likely Future Revenue</span>
            <span class="kpi-info-icon" title="Estimated cumulative lifetime value from this cohort">ⓘ</span>
          </div>
          <div class="kpi-card-value">${R}</div>
        </div>
        <div class="kpi-card-sub">Historical AOV × Frequency</div>
      </div>

      <div class="kpi-card accent-sapphire">
        <div>
          <div class="kpi-card-header">
            <span class="kpi-card-label">Avg. Return Likelihood</span>
            <span class="kpi-info-icon" title="Mean repeat purchase probability from Task 5 Logistic Regression">ⓘ</span>
          </div>
          <div class="kpi-card-value">${Math.round(e*100)}%</div>
        </div>
        <div class="kpi-card-sub">Model predicted repeat rate</div>
      </div>

      <div class="kpi-card accent-amber">
        <div>
          <div class="kpi-card-header">
            <span class="kpi-card-label">Valuable Needing Attention</span>
            <span class="kpi-info-icon" title="High-value customers with below-threshold return probability">ⓘ</span>
          </div>
          <div class="kpi-card-value" style="color:#d97706;">${a}</div>
        </div>
        <div class="kpi-card-sub">Immediate intervention targets</div>
      </div>
    </div>

    <!-- Executive Briefing Insight Box -->
    <div class="insight-box">
      <div class="insight-header">
        <span class="insight-icon">💡</span>
        <span class="insight-title">Executive Briefing &amp; Key Strategic Insights</span>
      </div>
      <ul class="insight-list">
        <li><strong>${a} valuable customer${a===1?"":"s"}</strong> represent urgent retention risk and may require proactive engagement before churn crystallizes.</li>
        <li><strong>${s} loyal high-value customer${s===1?"":"s"}</strong> show strong natural repeat momentum; safeguard their experience with priority service rather than margin-eroding discounts.</li>
        <li>Focusing resource allocation on <strong>Very High</strong> and <strong>High</strong> value segments protects up to <strong>${R}</strong> in prospective portfolio revenue.</li>
      </ul>
    </div>

    <!-- Charts Row -->
    <div class="charts-row">
      <!-- Segment Distribution -->
      <div class="chart-card">
        <div class="chart-card-title">Customer Value Segments</div>
        <div class="chart-card-subtitle">Distribution across estimated revenue tiers</div>
        ${l.map(m=>{const v=o[m]||0,I=i>0?Math.round(v/i*100):0,A=i>0?Math.round(v/u*100):0;return`
            <div class="bar-row">
              <div class="bar-row-info">
                <span class="bar-row-label">${m}</span>
                <span class="bar-row-count">${v} (${I}%)</span>
              </div>
              <div class="bar-track">
                <div class="bar-fill" style="width:${A}%; background:${d[m]};"></div>
              </div>
            </div>
          `}).join("")}
      </div>

      <!-- Recommended Actions Distribution -->
      <div class="chart-card">
        <div class="chart-card-title">Recommended Actions</div>
        <div class="chart-card-subtitle">Strategic intervention distribution for current cohort</div>
        ${y.map(m=>{const v=g[m]||0,I=i>0?Math.round(v/i*100):0,A=i>0?Math.round(v/P*100):0;return`
            <div class="bar-row">
              <div class="bar-row-info">
                <span class="bar-row-label">${m}</span>
                <span class="bar-row-count">${v} (${I}%)</span>
              </div>
              <div class="bar-track">
                <div class="bar-fill" style="width:${A}%; background:${{"Protect loyalty":"#10b981","Win back now":"#f43f5e","Grow customer value":"#8b5cf6","Low-cost nurture":"#64748b",Monitor:"#0284c7"}[m]||"#64748b"};"></div>
              </div>
            </div>
          `}).join("")}
      </div>
    </div>

    <!-- Repeat Probability Distribution Histogram -->
    <div class="chart-card">
      <div class="chart-card-title">Distribution of Return Likelihood Scores</div>
      <div class="chart-card-subtitle">Predicted repeat-purchase probability distribution (Task 5 Standard Logistic Regression)</div>
      ${te(t)}
    </div>
  `}function te(t){const r=new Array(10).fill(0);t.forEach(o=>{const l=Math.round(o.repeatProbability*100),d=Math.min(Math.floor(l/10),9);r[d]++});const i=Math.max(...r,1),n=130,e=550,a=e/10-8,s=r.map((o,l)=>{const d=o/i*(n-35),u=l*(e/10)+4,g=n-22-d,y=l<4?"#f59e0b":l<7?"#2563eb":"#10b981";return`
      <g>
        <rect x="${u}" y="${g}" width="${a}" height="${d}" fill="${y}" rx="3" opacity="0.9" />
        ${o>0?`<text x="${u+a/2}" y="${g-4}" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">${o}</text>`:""}
        <text x="${u+a/2}" y="${n-6}" text-anchor="middle" font-size="9.5" fill="#64748b">${l*10}%</text>
      </g>
    `}).join("");return`
    <svg viewBox="0 0 ${e} ${n}" class="bar-chart-svg" style="max-height:${n}px;">
      ${s}
    </svg>
    <div style="display:flex;flex-wrap:wrap;gap:1.5rem;margin-top:0.85rem;font-size:0.75rem;color:#64748b;">
      <span style="display:flex;align-items:center;gap:0.35rem;"><span style="display:inline-block;width:10px;height:10px;background:#f59e0b;border-radius:2px;"></span>Lower return likelihood (0–40%)</span>
      <span style="display:flex;align-items:center;gap:0.35rem;"><span style="display:inline-block;width:10px;height:10px;background:#2563eb;border-radius:2px;"></span>Moderate likelihood (40–70%)</span>
      <span style="display:flex;align-items:center;gap:0.35rem;"><span style="display:inline-block;width:10px;height:10px;background:#10b981;border-radius:2px;"></span>High likelihood (70–100%)</span>
    </div>
  `}function E(t,r){const i=[...t].sort((e,a)=>{const s=e.segment.id==="HIGH_VALUE_AT_RISK"?0:1,o=a.segment.id==="HIGH_VALUE_AT_RISK"?0:1;return s!==o?s-o:e.repeatProbability-a.repeatProbability}),n=i.slice(0,30);return`
    <div class="section-heading-wrap">
      <h2 class="section-heading">Customer Priority Queue</h2>
      <p class="section-description">
        Customers ordered by operational urgency: high historical revenue contribution paired with low predicted retention.
        <em>Click on any customer row to inspect their statistical profile and model coefficients.</em>
      </p>
    </div>

    <!-- Quick Stats -->
    <div class="kpi-row" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 1.5rem;">
      <div class="kpi-card accent-amber">
        <div>
          <div class="kpi-card-label">High-Value At Risk</div>
          <div class="kpi-card-value" style="color: #b91c1c;">${r.atRisk}</div>
        </div>
        <div class="kpi-card-sub">Urgent win-back required</div>
      </div>
      <div class="kpi-card accent-emerald">
        <div>
          <div class="kpi-card-label">Loyal To Recognise</div>
          <div class="kpi-card-value" style="color: #059669;">${r.loyal}</div>
        </div>
        <div class="kpi-card-sub">Maintain VIP engagement</div>
      </div>
      <div class="kpi-card accent-indigo">
        <div>
          <div class="kpi-card-label">Cross-Sell Opportunity</div>
          <div class="kpi-card-value" style="color: #4f46e5;">
            ${t.filter(e=>e.segment.id==="CROSS_SELL_OPPORTUNITY").length}
          </div>
        </div>
        <div class="kpi-card-sub">Basket expansion target</div>
      </div>
    </div>

    <!-- Search Bar -->
    <div style="margin-bottom: 1rem; display:flex; justify-content:space-between; align-items:center;">
      <div style="position:relative; width: 320px;">
        <input type="text" id="cust-search-input" placeholder="Search Customer ID..." value="${c.searchQuery||""}"
          style="width:100%; padding:0.5rem 0.75rem 0.5rem 2rem; border:1px solid #cbd5e1; border-radius:6px; font-size:0.8125rem; outline:none; background:#ffffff;" />
        <span style="position:absolute; left:0.65rem; top:50%; transform:translateY(-50%); color:#94a3b8; font-size:0.85rem;">🔍</span>
      </div>
      <span style="font-size:0.775rem; color:#64748b;">
        Showing <strong>${n.length}</strong> of <strong>${i.length}</strong> matches
      </span>
    </div>

    <!-- Customer Table -->
    <div class="table-container">
      <table class="customer-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Value Segment</th>
            <th>Proposed Action</th>
            <th>Return Likelihood</th>
            <th>Avg Order Value</th>
            <th>Days Since Purchase</th>
            <th>Orders</th>
            <th style="text-align:right;">Profile</th>
          </tr>
        </thead>
        <tbody>
          ${n.length===0?`
            <tr><td colspan="8" style="text-align:center;padding:3rem;color:#64748b;">No customers match the current filter criteria.</td></tr>
          `:n.map(e=>{const a=f(e.segment.id),s=h(e.segment.id),o=Math.round(e.repeatProbability*100),l=o>=70?"#10b981":o<40?"#f59e0b":"#2563eb",d={"Very High":"seg-very-high",High:"seg-high",Medium:"seg-medium",Low:"seg-low"}[a]||"seg-low",u={"Protect loyalty":"action-protect","Win back now":"action-winback","Grow customer value":"action-grow","Low-cost nurture":"action-nurture",Monitor:"action-monitor"}[s]||"action-monitor";return`
              <tr class="customer-table-row" data-customer-id="${e.CustomerID}">
                <td><span class="table-cust-id">#${e.CustomerID}</span></td>
                <td><span class="seg-badge ${d}">${a}</span></td>
                <td><span class="seg-badge ${u}">${s}</span></td>
                <td>
                  <div class="prob-mini-bar">
                    <div class="prob-track"><div class="prob-fill" style="width:${o}%;background:${l};"></div></div>
                    <span style="font-weight:700;font-size:0.8125rem;font-variant-numeric:tabular-nums;">${o}%</span>
                  </div>
                </td>
                <td style="font-weight:600;font-variant-numeric:tabular-nums;">${K(e.AverageOrderValue)}</td>
                <td style="font-variant-numeric:tabular-nums;">${j(e.Recency)}</td>
                <td style="font-variant-numeric:tabular-nums;">${Q(e.Frequency)}</td>
                <td style="text-align:right;">
                  <button class="open-detail-btn" data-customer-id="${e.CustomerID}" style="background:#f1f5f9; border:1px solid #cbd5e1; border-radius:4px; padding:0.25rem 0.55rem; font-size:0.725rem; font-weight:600; color:#334155; cursor:pointer;">
                    Inspect →
                  </button>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    </div>
  `}function re(t,r){const i={"Win back now":t.filter(e=>h(e.segment.id)==="Win back now"),"Protect loyalty":t.filter(e=>h(e.segment.id)==="Protect loyalty"),"Grow customer value":t.filter(e=>h(e.segment.id)==="Grow customer value"),"Low-cost nurture":t.filter(e=>h(e.segment.id)==="Low-cost nurture"),Monitor:t.filter(e=>h(e.segment.id)==="Monitor")};return`
    <div class="section-heading-wrap">
      <h2 class="section-heading">Strategic Action Playbook</h2>
      <p class="section-description">
        Each customer is mapped to a rule-based proposed retention strategy derived from statistical predictions and transactional behavior.
      </p>
    </div>

    <div style="background:#f0f9ff;border:1px solid #bae6fd;border-left:4px solid #0284c7;padding:0.95rem 1.25rem;border-radius:6px;margin-bottom:1.75rem;font-size:0.825rem;color:#0369a1;line-height:1.6;">
      <strong>Academic &amp; Governance Note:</strong> All actions are classified as <em>"Proposed Actions"</em>. They represent heuristic business rules rather than causally verified interventions. Task 6 randomized experimental validation (CRD/RCBD) is advised prior to full commercial rollout.
    </div>

    ${Object.entries({"Win back now":{color:"#b91c1c",badgeBg:"#ef4444",cardBorder:"#fecaca",headerBg:"#fef2f2",icon:"🎯",desc:"Substantial historical spending with decelerating purchase frequency. Recommend personalized VIP outreach or time-sensitive re-engagement incentives before churn becomes irreversible.",channel:"Personalized VIP outreach / Time-sensitive retention offer"},"Protect loyalty":{color:"#15803d",badgeBg:"#10b981",cardBorder:"#bbf7d0",headerBg:"#f0fdf4",icon:"🏆",desc:"Consistent repeat buyers with high predicted return rate. Maintain customer satisfaction and relationship momentum — avoid unnecessary, margin-diluting discount promotions.",channel:"VIP recognition / Early access preview / Dedicated concierge"},"Grow customer value":{color:"#6d28d9",badgeBg:"#8b5cf6",cardBorder:"#ddd6fe",headerBg:"#f5f3ff",icon:"📦",desc:"Above-median average order values but narrow product category breadth. Recommend tailored cross-category product recommendations to expand customer basket size.",channel:"Algorithmic cross-sell / Curated bundle recommendations"},"Low-cost nurture":{color:"#475569",badgeBg:"#64748b",cardBorder:"#e2e8f0",headerBg:"#f8fafc",icon:"📧",desc:"Lower return probability and modest order sizes suggest low expected ROI on expensive bespoke touchpoints. Recommend automated digital nurturing sequences.",channel:"Automated email sequences / Programmatic lifecycle reminders"},Monitor:{color:"#0369a1",badgeBg:"#0284c7",cardBorder:"#bae6fd",headerBg:"#f0f9ff",icon:"👁",desc:"Moderate engagement with steady purchase cadence. No urgent action required — maintain routine communications and track for significant behavioral shifts.",channel:"Standard marketing newsletter / Routine seasonal campaigns"}}).map(([e,a])=>{const s=i[e]||[];return`
        <div class="action-playbook-card" style="border-color:${a.cardBorder};">
          <div class="action-playbook-header" style="background:${a.headerBg};">
            <div class="action-playbook-title-wrap">
              <span class="action-playbook-icon">${a.icon}</span>
              <div>
                <span class="action-playbook-name" style="color:${a.color};">${e}</span>
                <span class="action-playbook-badge" style="background:${a.badgeBg}; margin-left:0.5rem;">${s.length} customers</span>
              </div>
            </div>
            <span class="action-playbook-channel">${a.channel}</span>
          </div>
          <div class="action-playbook-body">
            <p class="action-playbook-desc">${a.desc}</p>
            ${s.length>0?`
              <div class="customer-chips-wrap">
                ${s.slice(0,16).map(o=>`
                  <button class="customer-chip" data-customer-id="${o.CustomerID}" title="Click to inspect Customer #${o.CustomerID}">
                    #${o.CustomerID}
                  </button>
                `).join("")}
                ${s.length>16?`<span style="font-size:0.75rem;color:#64748b;padding:0.2rem 0.4rem;">+${s.length-16} more</span>`:""}
              </div>
            `:'<p style="font-size:0.775rem;color:#94a3b8;font-style:italic;">No customers currently match this playbook under active filters.</p>'}
          </div>
        </div>
      `}).join("")}
  `}function ae(){return`
    <div class="section-heading-wrap">
      <h2 class="section-heading">Understanding the Metrics &amp; Statistical Model</h2>
      <p class="section-description">
        Clear enterprise documentation explaining the statistical methodology, features, and governance guidelines behind this dashboard.
      </p>
    </div>

    <div class="explainer-card">
      <h4><span>🔢</span> Return Likelihood (Predicted Repeat-Purchase Probability)</h4>
      <p>The percentage score represents the <strong>Task 5 Standard Logistic Regression model's</strong> estimated probability that an existing customer will complete at least one repeat purchase within the subsequent 6-month observation window. The probability is calculated via the standard sigmoid link function <code>P(Y=1) = 1 / (1 + e^-z)</code>.</p>
    </div>

    <div class="explainer-card">
      <h4><span>📊</span> Customer Value Segment (Very High / High / Medium / Low)</h4>
      <p>Customer segments are dynamically derived by evaluating each customer's Average Order Value and predicted repeat probability against the empirical portfolio median. <strong>Very High</strong> customers exhibit high spend with low return probability (urgent retention target); <strong>High</strong> customers are loyal with strong return likelihood; <strong>Medium</strong> and <strong>Low</strong> tiers reflect balanced and lower spend tiers.</p>
    </div>

    <div class="explainer-card">
      <h4><span>💰</span> Likely Future Revenue (CLV Proxy)</h4>
      <p>Calculated as historical <em>Average Order Value × Historical Frequency</em> for each customer. This provides an illustrative, transparent revenue potential baseline for management prioritization without introducing opaque discounted cash flow assumptions.</p>
    </div>

    <div class="explainer-card">
      <h4><span>🔬</span> Model Architecture &amp; Empirical Predictors (Task 5)</h4>
      <p>The Standard Logistic Regression model relies on <strong>7 predictors</strong>: log-transformed Order Frequency (+0.76), Recency in days (−0.51), log Average Order Value (+0.19), log Product Diversity (+0.19), Customer Tenure in days (+0.11), log Average Purchase Interval (−0.04), and an interval availability flag (−0.01). On an 865-customer stratified holdout test set, the model achieved <strong>69.6% Accuracy</strong> and <strong>75.7% ROC-AUC</strong>.</p>
    </div>

    <div class="explainer-card">
      <h4><span>⚖️</span> Experimental Validation &amp; Governance (Task 6)</h4>
      <p>Because the training data is observational, high correlation does not imply causation. Before investing marketing capital into automated retention interventions, a formal <strong>Randomized Controlled Trial (CRD or RCBD)</strong> blocking on purchase frequency is strongly advised to measure true incremental lift over an uncontacted control group.</p>
    </div>
  `}function S(t){const r=Math.round(t.repeatProbability*100),i=f(t.segment.id),n=h(t.segment.id),e=Math.round(t.AverageOrderValue*t.Frequency);return`
    <div class="modal-dialog">
      <div class="modal-header">
        <div class="modal-title">
          <span>Customer Profile #${t.CustomerID}</span>
          <span class="seg-badge seg-very-high">${i} Segment</span>
        </div>
        <button class="modal-close-btn" id="modal-close-btn">×</button>
      </div>

      <div class="modal-body">
        <div class="detail-metric-grid">
          <div class="detail-metric-box">
            <div class="detail-metric-box-label">Return Probability</div>
            <div class="detail-metric-box-val" style="color:#2563eb;">${r}%</div>
          </div>
          <div class="detail-metric-box">
            <div class="detail-metric-box-label">Estimated CLV</div>
            <div class="detail-metric-box-val" style="color:#10b981;">£${e.toLocaleString()}</div>
          </div>
          <div class="detail-metric-box">
            <div class="detail-metric-box-label">Avg Order Value</div>
            <div class="detail-metric-box-val">£${Math.round(t.AverageOrderValue).toLocaleString()}</div>
          </div>
          <div class="detail-metric-box">
            <div class="detail-metric-box-label">Days Since Order</div>
            <div class="detail-metric-box-val">${t.Recency} days</div>
          </div>
          <div class="detail-metric-box">
            <div class="detail-metric-box-label">Historical Orders</div>
            <div class="detail-metric-box-val">${t.Frequency}</div>
          </div>
          <div class="detail-metric-box">
            <div class="detail-metric-box-label">Product Breadth</div>
            <div class="detail-metric-box-val">${t.ProductDiversity} items</div>
          </div>
        </div>

        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #2563eb; border-radius:6px; padding:1rem; margin-bottom:1.25rem;">
          <div style="font-weight:700; color:#0f172a; margin-bottom:0.25rem; font-size:0.9rem;">
            Recommended Action: ${n}
          </div>
          <div style="font-size:0.8rem; color:#475569; line-height:1.5;">
            ${t.explanation?t.explanation.summary:"Standard targeted lifecycle management protocol."}
          </div>
        </div>

        <div style="border:1px solid #e2e8f0; border-radius:6px; padding:1rem; background:#ffffff;">
          <div style="font-weight:700; font-size:0.85rem; color:#0f172a; margin-bottom:0.65rem;">
            Task 5 Model Feature Contribution Drivers
          </div>
          <div style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.775rem;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span>Purchase Frequency Impact (+0.76 coef)</span>
              <span style="font-weight:600; color:${t.Frequency>=3?"#10b981":"#64748b"};">${t.Frequency} orders (${t.Frequency>=3?"Positive driver":"Neutral"})</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span>Recency Decay Impact (−0.51 coef)</span>
              <span style="font-weight:600; color:${t.Recency>60?"#ef4444":"#10b981"};">${t.Recency} days (${t.Recency>60?"Decay penalty":"Recent"})</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span>Average Order Value Impact (+0.19 coef)</span>
              <span style="font-weight:600; color:#2563eb;">£${Math.round(t.AverageOrderValue)} (Positive driver)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function V(){document.querySelectorAll(".tab-btn").forEach(r=>{r.addEventListener("click",()=>{c.activeTab=r.getAttribute("data-tab"),k()})});const t=document.getElementById("cust-search-input");t&&t.addEventListener("input",r=>{c.searchQuery=r.target.value;const i=$(),n=M(i),e=document.getElementById("tab-attention");e&&(e.innerHTML=E(i,n),V())}),document.querySelectorAll(".customer-table-row, .open-detail-btn, .customer-chip").forEach(r=>{r.addEventListener("click",i=>{const n=r.getAttribute("data-customer-id");if(!n)return;const a=C.getAllCustomers().find(s=>String(s.CustomerID)===String(n));if(a){b=a;const s=document.getElementById("customer-modal");s&&(s.innerHTML=S(a),s.classList.add("open"),w())}})}),w()}function w(){const t=document.getElementById("customer-modal"),r=document.getElementById("modal-close-btn");r&&t&&r.addEventListener("click",()=>{t.classList.remove("open"),b=null}),t&&t.addEventListener("click",i=>{i.target===t&&(t.classList.remove("open"),b=null)})}function p(){X(),k()}function D(){C.subscribe(()=>{p()}),p()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",D):D();
