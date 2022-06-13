import{_ as r,c,a as t,w as a,e,b as n,d as s,r as p,o as u}from"./404.md.a43789c1.js";var m="/assets/images/tutorials/attachables/attachable-example.png",d="/assets/images/tutorials/attachables/attachable-step-one.png",h="/assets/images/tutorials/attachables/blockbench-view-one.png",b="/assets/images/tutorials/attachables/blockbench-view-two.png",k="/assets/images/tutorials/attachables/camera-configuration.png",_="/assets/images/tutorials/attachables/blockbench-view-three.png",g="/assets/images/tutorials/attachables/attachable-step-two.png";const Y='{"title":"Attachables Tutorial","description":"","frontmatter":{"title":"Attachables Tutorial","category":"Tutorials","tags":["beginner"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Geometry","slug":"geometry"},{"level":2,"title":"Display Settings","slug":"display-settings"},{"level":3,"title":"First-person Animations","slug":"first-person-animations"},{"level":2,"title":"Conclusion","slug":"conclusion"}],"relativePath":"items/attachables.md"}',q={},y=e('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This tutorial assumes you have a basic understanding of MoLang, render controllers, animations, and client entity definitions. Ensure to check out the <a href="/entities/entity-intro-rp.html">client entity tutorial</a> before starting this tutorial!</p></div><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>When we design a custom item or block, Minecraft will build a model from a template so the item can be displayed when held. This takes the form of the item&#39;s sprite being an extruded texture mesh, or blocks displaying with their model. But by using a system called <strong>attachables</strong> we can design our own models to be displayed when these items are held.</p><p>Ever wanted sticks to look like spyglasses? Or to wield a big chainsaw with a spinning chain? Attachables are the way to accomplish that!</p><p>By the end of this tutorial, you should be able to:</p>',5),f=n("ul",null,[n("li",null,"[ ] Understand how attachable definitions are made"),n("li",null,"[ ] Make or edit a geometry to be compatible for attachables"),n("li",null,"[ ] Set up animations to display the geometry in Minecraft")],-1),v=n("h2",{id:"overview",tabindex:"-1"},[s("Overview "),n("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#")],-1),w=n("p",null,"Attachable files are quite similar in design to client entity definitions; they let us define textures, materials, geometries, and animations to display the attachable.",-1),T=n("p",null,"Here's a basic example of an attachable, which we will be using throughout this tutorial, that makes a stick look like a spyglass:",-1),x=s("RP/attachables/stick.json"),S=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:attachable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:stick&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entity&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entity_alphatest_glint&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/entity/spyglass&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/misc/enchanted_item_glint&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.spyglass&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;wield&quot;</span><span class="token operator">:</span> <span class="token string">&quot;animation.spyglass.holding&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;animate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token string">&quot;wield&quot;</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;controller.render.item_default&quot;</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>If you work with entities often, this should look pretty familiar. A couple of key things to point out with attachable definitions:</p><ul><li>The attachable&#39;s identifier matches an existing item identifier. Any items or blocks with that ID will use the corresponding attachable.</li><li>There is a material and texture listed for the enchantment glint. This is important to keep around if your item should have the glint when enchanted.</li></ul><p>Making attachables is more involved than making a client entity file though, as the geometry needs to be set up a certain way and animations are tricky to set up.</p><p><img src="`+m+'" alt=""></p><p><em>That would hurt if you put that in your eye.</em></p><h2 id="geometry" tabindex="-1">Geometry <a class="header-anchor" href="#geometry" aria-hidden="true">#</a></h2><p>For this tutorial&#39;s demonstration, a model of Steve&#39;s head will be used. The same principles can be applied to any custom model you want to use.</p>',8),A=s("\u{1F4C4} Steve head model"),I=n("p",null,[s("In the attachable file, change the geometry name to "),n("code",null,'"geometry.steve_head"'),s(" and the default texture path to "),n("code",null,'"textures/entity/steve"'),s(":")],-1),P=s("RP/attachables/spyglass.json"),C=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/entity/steve&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;enchanted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/misc/enchanted_item_glint&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.steve_head&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>It is important to make sure your model can work with attachables. Our first step is modifying the root bone of the geometry to be bound to the slot the item is placed in. Take careful note of line 16 in the Steve head model below:</p>`,2),V=s("RP/models/entity/steve_head.geo.json"),B=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.steve_head&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;texture_width&quot;</span><span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
				<span class="token property">&quot;texture_height&quot;</span><span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
				<span class="token property">&quot;visible_bounds_width&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
				<span class="token property">&quot;visible_bounds_height&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
				<span class="token property">&quot;visible_bounds_offset&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;bones&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;steve_head&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;binding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;q.item_slot_to_bone_name(c.item_slot)&quot;</span><span class="token punctuation">,</span>
					<span class="token property">&quot;pivot&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;cubes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span><span class="token property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">-4</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">-4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">&quot;uv&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>While the <code>&quot;parent&quot;</code> property accepts a string and will make any child bones inherit transformations from the specified bone, the <code>&quot;binding&quot;</code> property accepts MoLang and sets the specified bone as the root that this geometry should inherit; the position of the model is moved to this bone too. This will have consequences in the next section where we make animations.</p><p>Here we are converting the contextual variable <code>c.item_slot</code> to its corresponding bone name in the geometry. The conversions are <code>&#39;main_hand&#39;</code> \u2192 &quot;rightItem&quot;, <code>&#39;off_hand&#39;</code> \u2192 &quot;leftItem&quot;, and <code>&#39;head&#39;</code> \u2192 &quot;head&quot;.</p><p><img src="`+d+'" alt=""></p><p><em>The head is free-floating for now, but we are about to fix that.</em></p><h2 id="display-settings" tabindex="-1">Display Settings <a class="header-anchor" href="#display-settings" aria-hidden="true">#</a></h2><p>With that done, the next step is to set up animations to display the model in first person and third person. In the attachable file, change the animations object to include an animation for holding the item in both first person and third person, then change the scripts to animate them depending on context:</p>',7),j=s("RP/attachables/spyglass.json"),R=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;hold_first_person&quot;</span><span class="token operator">:</span> <span class="token string">&quot;animation.steve_head.hold_first_person&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;hold_third_person&quot;</span><span class="token operator">:</span> <span class="token string">&quot;animation.steve_head.hold_third_person&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;animate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;hold_first_person&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c.is_first_person&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;hold_third_person&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!c.is_first_person&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Attached below is a template to assist with setting up these animations, using a modified player geometry.</p>`,2),D=s("\u{1F4C1} Player geometry and animations"),E=e('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>These files already have our Steve head model imported for this tutorial and it serves as an example.</p></div><p>Here are some instructions on how to use these files:</p><ul><li>Edit the geometry file to include the bones and cubes from your custom model.</li><li>Open the geometry in Blockbench, and set your model to be parented under the corresponding bone (&quot;rightItem&quot;, &quot;leftItem&quot;, or &quot;head&quot;).</li><li>Move the model&#39;s root bone position so its origin (0, 0, 0) is located at the same position as the parented bone&#39;s pivot. <ul><li>It may be a good idea to place a locator at the root of your model to make adjustments easier.</li></ul></li></ul><p><img src="'+h+'" alt=""></p><p><em>For the right hand slot, the root should be at (6, 15, 1).</em></p><ul><li>In the Animations tab, import the provided animations, and play them.</li></ul><p>You may then make new animations to position your model as desired. Some example first- and third-person animations for our Steve head model are supplied as well. Be sure to play the template animations while you make adjustments, as these will ensure what you see in Blockbench matches what comes out in Minecraft.</p><p><img src="'+b+'" alt=""></p><h3 id="first-person-animations" tabindex="-1">First-person Animations <a class="header-anchor" href="#first-person-animations" aria-hidden="true">#</a></h3><p>For creating first person animations, create a new camera angle with the following values to replicate the first-person view in Minecraft:</p><p><img src="'+k+'" alt=""></p><p><em>You can pull this up by clicking on \u2261 &quot;Preview&quot; \u2192 &quot;Save Angle...&quot;.</em></p><p><img src="'+_+'" alt=""></p><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-hidden="true">#</a></h2><p>After the geometry is modified and the animations are saved, the item in-game should appear exactly as it does in Blockbench. You can then add any additional animations, models, textures, and whatever else you want to the attachable definition to customize it however you want.</p><p><img src="'+g+'" alt=""></p>',16);function N(M,O,F,H,$,z){const l=p("Checklist"),o=p("CodeHeader"),i=p("BButton");return u(),c("div",null,[y,t(l,null,{default:a(()=>[f]),_:1}),v,w,T,t(o,null,{default:a(()=>[x]),_:1}),S,t(i,{link:"https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/steve_head.geo.json?raw=true"},{default:a(()=>[A]),_:1}),I,t(o,null,{default:a(()=>[P]),_:1}),C,t(o,null,{default:a(()=>[V]),_:1}),B,t(o,null,{default:a(()=>[j]),_:1}),R,t(i,{link:"https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/public/assets/packs/tutorials/attachables/AttachableRotations.zip?raw=true"},{default:a(()=>[D]),_:1}),E])}var G=r(q,[["render",N]]);export{Y as __pageData,G as default};
