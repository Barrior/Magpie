
# 规格书写格式
1. 规格后面规则覆盖前面规则。

# 测试用例模板
> 参考 `telCN.js`。

1. 用 `/* comment */` 将测试用例分类，每个分类下的测试用例用 `// comment` 书写注释。
1. 测试用例模块自上而下分别为 `公共测试函数/用例`，`正常逻辑校验`，`特定错误逻辑校验` 。
1. 函数命名规则。
    1. 尽量简短（权重 1 分）。
    1. 尽量英文全名，减少缩写带来的隔阂（权重 2 分）。
    1. 清晰表达函数的功能（权重 2 分）。
