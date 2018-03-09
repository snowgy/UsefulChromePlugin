# UsefulChromePlugin
help you search word and add it to your shanbay vocabulary list
## motivation
最近一段时间在备考gre，然后用的是考满分刷题，然后背单词用的是扇贝。感觉每次做完题之后一个个单词查很麻烦 而且如果想把单词加入扇贝单词本还得再把单词输入到扇贝网。因为gre题目里的生词实在太多了 所以一个个加到单词表非常费时费力。
## function
这个插件实现了双击单词首先显示词义 然后会询问需不需要加入到单词表。目前可以在 http://gre.kmf.com/practise/result/* 下使用。如果想适用于更多网页，只需要修改manifest.json文件。
## problem
* 选中选项中的单词时，会把选项一起选中。这样获得的单词前面会多一个大写的选项字母。目前的解决方式是粗暴地把单词前的大写字母过滤掉。但是这样对于查句首的单词是不正确的。不过句首的单词一般是冠词 没有什么人会查 所以整体体验还不错。
* 用户需要先登录扇贝网才能使用添加到单词本功能
