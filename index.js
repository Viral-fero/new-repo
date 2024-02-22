var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:../../components/ReactJsonView/lib.client
var require_lib = __commonJS({
  "empty-module:../../components/ReactJsonView/lib.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react3 = require("react");

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-N5UU32MN.css";

// app/root.tsx
var import_react4 = require("@emotion/react");

// app/mui/ClientStyleContext.tsx
var React = __toESM(require("react")), ClientStyleContext_default = React.createContext({
  reset: () => {
  }
});

// app/root.tsx
var import_material = require("@mui/material"), import_react5 = require("@remix-run/react");

// app/components/ToastContainer.tsx
var import_react_hot_toast = require("react-hot-toast");

// app/hooks/useWindowSize.tsx
var import_react2 = require("react"), useWindowSize = () => {
  let [windowSize, setWindowSize] = (0, import_react2.useState)({
    width: void 0,
    height: void 0
  });
  return (0, import_react2.useEffect)(() => {
    if (typeof window < "u") {
      let handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      return window.addEventListener("resize", handleResize), handleResize(), () => window.removeEventListener("resize", handleResize);
    }
  }, []), windowSize;
}, useWindowSize_default = useWindowSize;

// app/components/ToastContainer.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), ToastContainer = () => {
  let windowSize = useWindowSize_default();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_react_hot_toast.Toaster,
    {
      gutter: 8,
      reverseOrder: !1,
      position: windowSize.width > 700 ? "bottom-right" : "bottom-center"
    }
  );
}, ToastContainer_default = ToastContainer;

// app/root.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
], Document = (0, import_react4.withEmotionCache)(
  ({ children, title }, emotionCache) => {
    let clientStyleData = (0, import_react3.useContext)(ClientStyleContext_default);
    return (0, import_material.unstable_useEnhancedEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("meta", { charSet: "utf-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "meta",
          {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Meta, {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Links, {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "link",
          {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "link",
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: ""
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "link",
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "meta",
          {
            name: "emotion-insertion-point",
            content: "emotion-insertion-point"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ToastContainer_default, {}),
        children,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.ScrollRestoration, {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Scripts, {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.LiveReload, {})
      ] })
    ] });
  }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Outlet, {}) });
}

// app/routes/user.workflows.list.add.$formNo.design.key-mapping.$funIndex.tsx
var user_workflows_list_add_formNo_design_key_mapping_funIndex_exports = {};
__export(user_workflows_list_add_formNo_design_key_mapping_funIndex_exports, {
  default: () => KeyMapper2
});
var import_react15 = require("@remix-run/react"), import_Grid = __toESM(require("@mui/material/Grid"));

// app/components/Outlet.tsx
var import_react6 = require("react"), import_react_router_dom = require("react-router-dom"), import_jsx_runtime4 = require("react/jsx-runtime"), context = (0, import_react6.createContext)(null);
function Outlet2({ data: data3 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(context.Provider, { value: data3, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom.Outlet, {}) });
}
function useParentData() {
  let parentData = (0, import_react6.useContext)(context);
  if (parentData === null)
    throw new Error("Missing parent data.");
  return parentData;
}

// app/components/Form/SubmitOrSave.tsx
var import_Box = __toESM(require("@mui/material/Box")), import_Button = __toESM(require("@mui/material/Button")), import_Divider = __toESM(require("@mui/material/Divider")), import_jsx_runtime5 = require("react/jsx-runtime"), SubmitOrSave = ({
  disabled = !1,
  name = "Submit",
  onClick = () => {
  }
}) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_Box.default, { sx: { marginTop: 2 }, children: [
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_Divider.default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_Box.default,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        p: 2
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_Button.default,
        {
          disabled,
          type: "submit",
          variant: "contained",
          color: "primary",
          sx: { mr: 1, minWidth: "8rem", color: "white" },
          onClick,
          children: name
        }
      )
    }
  )
] }), SubmitOrSave_default = SubmitOrSave;

// app/components/KeysMapper.tsx
var import_react14 = require("react"), import_material6 = require("@mui/material");

// app/components/ReactJsonView/index.tsx
var import_react7 = require("react"), import_jsx_runtime6 = require("react/jsx-runtime"), ReactJsonLib = (0, import_react7.lazy)(
  () => Promise.resolve().then(() => __toESM(require_lib()))
);
function ReactJsonViewer({
  src,
  name,
  fallback = "Loading...",
  displayObjectSize = !1,
  displayDataTypes = !1,
  onEdit,
  onAdd,
  onDelete,
  onSelect,
  theme
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Suspense, { fallback, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    ReactJsonLib,
    {
      src,
      name,
      displayObjectSize,
      displayDataTypes,
      onEdit,
      onAdd,
      onDelete,
      onSelect,
      theme
    }
  ) });
}

// app/components/React-Json-Editor/index.tsx
var import_react13 = require("react"), import_lodash2 = __toESM(require("lodash")), import_Box3 = __toESM(require("@mui/material/Box"));

// app/components/React-Json-Editor/components/JsonView.tsx
var import_Select = __toESM(require("@mui/material/Select")), import_react12 = require("react");

// app/components/React-Json-Editor/common.ts
var DataType = /* @__PURE__ */ ((DataType2) => (DataType2.STRING = "string", DataType2.NUMBER = "number", DataType2.BOOLEAN = "boolean", DataType2.OBJECT = "object", DataType2.ARRAY = "array", DataType2))(DataType || {}), typeMap = {
  ["string" /* STRING */]: "",
  ["boolean" /* BOOLEAN */]: !0,
  ["number" /* NUMBER */]: 0,
  ["object" /* OBJECT */]: {},
  ["array" /* ARRAY */]: []
}, getTypeString = (element) => Object.prototype.toString.call(element).match(/\w+/g)?.[1].toLowerCase(), setNewValue = (keys, obj, newElement) => {
  let index = keys.shift(), objKeys = Object.keys(obj);
  if (keys.length)
    return setNewValue(keys, obj[objKeys[index]], newElement);
  obj[objKeys[index]] = newElement;
}, getQuoteAddress = (newElement, indexKeys, currentData) => (setNewValue(indexKeys, currentData, newElement), currentData), getKeyList = (uniqueKey) => uniqueKey.split("-").slice(1), isObject = (value) => value && typeof value == "object", getPlaceholder = (value) => isObject(value) ? getTypeString(value) === "array" /* ARRAY */ ? `Array [${value.length}]` : `Object {${Object.keys(value).length}}` : null;

// app/components/React-Json-Editor/components/JsonView.tsx
var import_material5 = require("@mui/material"), import_Box2 = __toESM(require("@mui/material/Box")), import_Autocomplete = __toESM(require("@mui/material/Autocomplete")), import_TextField = __toESM(require("@mui/material/TextField"));

// app/components/React-Json-Editor/store/index.tsx
var import_react8 = __toESM(require("react")), ConfigContext = import_react8.default.createContext(null);

// app/components/React-Json-Editor/components/AddItem.tsx
var import_lodash = __toESM(require("lodash")), import_react9 = require("react");
var import_AddCircle = __toESM(require("@mui/icons-material/AddCircle")), import_material2 = require("@mui/material"), import_jsx_runtime7 = require("react/jsx-runtime"), AddItem = (props) => {
  let { setEditObject, editObject, optionsMap } = (0, import_react9.useContext)(ConfigContext), { uniqueKey, sourceData } = props, isArray = Array.isArray(sourceData), [templateData, setTemplateData] = (0, import_react9.useState)({}), [showIncreaseMap, setShowIncreaseMap] = (0, import_react9.useState)({}), onClickIncrease = (key, value) => {
    showIncreaseMap[key] = value, templateData[key] = {}, setTemplateData({
      ...templateData
    }), setShowIncreaseMap({
      ...showIncreaseMap
    });
  }, changeInputKey = (uniqueKey2, event) => {
    templateData[uniqueKey2].key = event.target.value, setTemplateData({ ...templateData });
  }, changeInputValue = (uniqueKey2, value) => {
    templateData[uniqueKey2].value = value, setTemplateData({ ...templateData });
  }, onChangeTempType = (uniqueKey2, type) => {
    templateData[uniqueKey2].type = type, templateData[uniqueKey2].value = typeMap[type], setTemplateData({
      ...templateData
    });
  }, onConfirmIncrease = (uniqueKey2, sourceData2) => {
    let { key: aKey, value } = import_lodash.default.cloneDeep(templateData[uniqueKey2]);
    isArray ? sourceData2.push(value) : sourceData2[aKey] = value, setEditObject({ ...editObject }), onClickIncrease(uniqueKey2, !1);
  }, getTypeTemplate = (type) => {
    let currentOptions = optionsMap?.default || [];
    switch (type) {
      case "string" /* STRING */:
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_material2.Autocomplete,
          {
            freeSolo: !0,
            options: currentOptions,
            onChange: (event, value) => changeInputValue(uniqueKey, value.value),
            renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material2.TextField,
              {
                ...params,
                onChange: (event) => changeInputValue(
                  uniqueKey,
                  event.target.value
                ),
                variant: "outlined",
                size: "small",
                style: { width: "100px" }
              }
            )
          }
        );
      case "number" /* NUMBER */:
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_material2.Autocomplete,
          {
            freeSolo: !0,
            options: currentOptions,
            onChange: (event, value) => changeInputValue(uniqueKey, value.value),
            renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material2.TextField,
              {
                ...params,
                onChange: (event) => changeInputValue(
                  uniqueKey,
                  event.target.value
                ),
                variant: "outlined",
                size: "small",
                style: { width: "100px" }
              }
            )
          }
        );
      case "boolean" /* BOOLEAN */:
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.FormControl, { size: "small", style: { width: "100px" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          import_material2.Select,
          {
            defaultValue: !0,
            onChange: (e) => {
              changeInputValue(uniqueKey, e.target.value);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.MenuItem, { value: "true", children: "true" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.MenuItem, { value: "false", children: "false" })
            ]
          }
        ) });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.Box, { className: "addItem", children: showIncreaseMap[uniqueKey] ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    import_material2.Grid,
    {
      container: !0,
      spacing: 1,
      sx: { display: "flex", alignItems: "center" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.Grid, { item: !0, children: !isArray && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_material2.TextField,
          {
            size: "small",
            style: { width: "100px" },
            onChange: (event) => changeInputKey(uniqueKey, event)
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.Grid, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.FormControl, { size: "small", style: { width: "100px" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_material2.Select,
          {
            onChange: (e) => onChangeTempType(uniqueKey, e.target.value),
            defaultValue: "string" /* STRING */,
            children: Object.values(DataType).map((item) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material2.MenuItem,
              {
                value: item,
                style: { width: "100px" },
                children: item
              },
              item
            ))
          }
        ) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.Grid, { item: !0, children: getTypeTemplate(
          templateData[uniqueKey].type || "string" /* STRING */
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_material2.Grid, { item: !0, sx: { display: "flex", flexDirection: "row" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.Grid, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_material2.Button,
            {
              size: "small",
              variant: "outlined",
              onClick: () => onConfirmIncrease(uniqueKey, sourceData),
              children: "Confirm"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.Grid, { item: !0, sx: { marginLeft: "10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_material2.Button,
            {
              size: "small",
              variant: "outlined",
              onClick: () => onClickIncrease(uniqueKey, !1),
              children: "Cancel"
            }
          ) })
        ] })
      ]
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material2.Grid, { columnSpacing: 8, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_AddCircle.default,
    {
      sx: { color: "#1E88E5", cursor: "pointer" },
      onClick: () => onClickIncrease(uniqueKey, !0)
    }
  ) }) }, uniqueKey);
}, AddItem_default = AddItem;

// app/components/React-Json-Editor/components/ArrayView.tsx
var import_react11 = require("react");
var import_material4 = require("@mui/material");

// app/components/React-Json-Editor/components/Collapse.tsx
var import_react10 = require("react");
var import_ExpandMore = __toESM(require("@mui/icons-material/ExpandMore")), import_jsx_runtime8 = require("react/jsx-runtime");
function CollapsePart(props) {
  let { fieldValue, uniqueKey } = props, { onChangeAllow, allowMap } = (0, import_react10.useContext)(ConfigContext);
  return isObject(fieldValue) ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "span",
    {
      style: { marginRight: "5px" },
      onClick: () => onChangeAllow(uniqueKey),
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        import_ExpandMore.default,
        {
          className: `collapse ${allowMap[uniqueKey] ? "down" : "up"}`
        }
      )
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {});
}
var Collapse_default = CollapsePart;

// app/components/React-Json-Editor/components/Tools.tsx
var import_material3 = require("@mui/material"), import_icons_material = require("@mui/icons-material"), import_jsx_runtime9 = require("react/jsx-runtime"), ToolsView = (props) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ConfigContext.Consumer, { children: ({ onChangeType, onClickDelete }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
  import_material3.Box,
  {
    className: "tools",
    sx: {
      display: "flex",
      alignItems: "center"
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        import_material3.FormControl,
        {
          variant: "outlined",
          size: "small",
          style: { width: "100px" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material3.InputLabel, { children: "Type" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              import_material3.Select,
              {
                value: getTypeString(props.fieldValue),
                onChange: (event) => onChangeType(
                  event.target.value,
                  props.uniqueKey
                ),
                label: "Type",
                children: Object.values(DataType).map((item) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material3.MenuItem, { value: item, children: item }, item))
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "iconSubstraction", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_icons_material.RemoveCircleOutline,
        {
          style: {
            color: "#E74C3C",
            cursor: "pointer",
            fontSize: "20px",
            marginLeft: "10px"
          },
          onClick: () => onClickDelete(props.fieldKey, props.sourceData)
        }
      ) })
    ]
  }
) }), Tools_default = ToolsView;

// app/components/React-Json-Editor/components/ArrayView.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function ArrayView(props) {
  let { allowMap } = (0, import_react11.useContext)(ConfigContext);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_material4.Box, { className: "arrayContent", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material4.Box, { children: props.fieldValue.map((item, index) => {
      let uniqueKey = `${props.parentUniqueKey}-${index}`;
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "indexLine", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          import_material4.Grid,
          {
            sx: {
              display: "flex",
              flexDirection: "row"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "jsonKey", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_material4.Typography, { sx: { marginRight: "5px" }, children: [
                index + 1,
                "."
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                Collapse_default,
                {
                  uniqueKey,
                  fieldValue: item
                }
              ),
              isObject(item) ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("b", { className: "mt15", children: getPlaceholder(item) }) : null
            ]
          }
        ),
        !allowMap[uniqueKey] && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "jsonValue", children: props.getValue(
          item,
          index,
          props.fieldValue,
          props.deepLevel + 1,
          uniqueKey
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          Tools_default,
          {
            uniqueKey,
            fieldValue: item,
            fieldKey: `${index}`,
            sourceData: props.fieldValue
          }
        )
      ] }, uniqueKey);
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      AddItem_default,
      {
        uniqueKey: props.parentUniqueKey,
        deepLevel: props.deepLevel,
        sourceData: props.fieldValue
      },
      props.parentUniqueKey
    ) })
  ] });
}
var ArrayView_default = ArrayView;

// app/components/React-Json-Editor/components/JsonView.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function JsonView(props) {
  let { editObject, setEditObject, optionsMap } = props, [allowMap, setAllowMap] = (0, import_react12.useState)({}), syncData = (data3) => {
    setEditObject({ ...data3 });
  }, onClickDelete = (key, sourceData) => {
    Array.isArray(sourceData) ? sourceData.splice(+key, 1) : Reflect.deleteProperty(sourceData, key), syncData(editObject);
  }, onChangeType = (type, uniqueKey) => {
    let newEditObject = getQuoteAddress(
      typeMap[type],
      getKeyList(uniqueKey),
      editObject
    );
    syncData(newEditObject);
  }, onChangeKey = (event, currentKey, uniqueKey, source) => {
    let newValue = {};
    for (let key in source)
      Object.prototype.hasOwnProperty.call(source, key) && (key === currentKey ? newValue[event.target.value] = source[key] : newValue[key] = source[key]);
    let indexKeys = getKeyList(uniqueKey), ROOT_LEVEL = 1;
    if (indexKeys.length === ROOT_LEVEL)
      syncData(newValue);
    else {
      indexKeys.pop();
      let newTotalData = getQuoteAddress(
        newValue,
        indexKeys,
        editObject
      );
      syncData(newTotalData);
    }
  }, onChangeValue = (value, key, source) => {
    source[key] = value, syncData(editObject);
  }, getValue = (fieldValue, fieldKey, sourceData, deepLevel, parentUniqueKey) => {
    let thatType = getTypeString(fieldValue), currentOptions = optionsMap?.default || [];
    switch (thatType) {
      case "array" /* ARRAY */:
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          ArrayView_default,
          {
            fieldValue,
            fieldKey,
            sourceData,
            deepLevel,
            parentUniqueKey,
            getValue
          }
        );
      case "object" /* OBJECT */:
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: renderJsonConfig(
          fieldValue,
          deepLevel + 1,
          parentUniqueKey
        ) });
      case "string" /* STRING */:
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          import_Box2.default,
          {
            sx: {
              position: "absolute",
              left: 120,
              top: 0
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              import_Autocomplete.default,
              {
                freeSolo: !0,
                options: currentOptions,
                value: fieldValue,
                onChange: (event, value) => {
                  onChangeValue(
                    value.value,
                    fieldKey,
                    sourceData
                  );
                },
                renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  import_TextField.default,
                  {
                    onChange: (event) => {
                      onChangeValue(
                        event.target.value,
                        fieldKey,
                        sourceData
                      );
                    },
                    ...params,
                    variant: "outlined",
                    size: "small",
                    style: { width: "100px" }
                  }
                )
              }
            )
          }
        );
      case "number" /* NUMBER */:
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          import_Box2.default,
          {
            sx: {
              position: "absolute",
              // right: 0,
              left: 120,
              top: 0
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              import_Autocomplete.default,
              {
                freeSolo: !0,
                options: currentOptions,
                value: fieldValue,
                onChange: (event, value) => {
                  onChangeValue(
                    value.value,
                    fieldKey,
                    sourceData
                  );
                },
                renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  import_TextField.default,
                  {
                    onChange: (event) => {
                      onChangeValue(
                        event.target.value,
                        fieldKey,
                        sourceData
                      );
                    },
                    ...params,
                    variant: "outlined",
                    size: "small",
                    style: { width: "100px" }
                  }
                )
              }
            )
          }
        );
      case "boolean" /* BOOLEAN */:
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material5.FormControl, { size: "small", style: { width: "100px" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          import_Select.default,
          {
            defaultValue: Boolean(fieldValue),
            onChange: (event) => {
              onChangeValue(
                event.target.value,
                fieldKey,
                sourceData
              );
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material5.MenuItem, { value: "true", children: "true" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material5.MenuItem, { value: "false", children: "false" })
            ]
          }
        ) });
    }
  }, onChangeAllow = (uniqueKey) => {
    allowMap[uniqueKey] = !allowMap[uniqueKey], setAllowMap({ ...allowMap });
  }, defaultLevel = 1, renderJsonConfig = (sourceData, deepLevel = defaultLevel, parentUniqueKey = `${deepLevel}`) => {
    let keyList = Object.keys(sourceData);
    return keyList.length ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "div",
      {
        style: {
          marginLeft: defaultLevel === deepLevel ? "0" : "20px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "div",
            {
              style: {
                marginTop: "20px"
              },
              children: keyList.map((fieldKey, index) => {
                let uniqueKey = `${parentUniqueKey}-${index}`, fieldValue = sourceData[fieldKey];
                return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_Box2.default, { className: "indexLine", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                    import_Box2.default,
                    {
                      sx: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                          Collapse_default,
                          {
                            uniqueKey,
                            fieldValue
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                          import_TextField.default,
                          {
                            size: "small",
                            style: { width: "100px" },
                            placeholder: fieldKey,
                            value: fieldKey,
                            onChange: (event) => onChangeKey(
                              event,
                              fieldKey,
                              uniqueKey,
                              sourceData
                            )
                          }
                        ) }),
                        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                          import_material5.Typography,
                          {
                            sx: {
                              fontSize: "14px",
                              fontWeight: 600,
                              marginLeft: "10px"
                            },
                            children: getPlaceholder(fieldValue)
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_Box2.default, { sx: { margin: "5px 10px 10px 0px" }, children: !allowMap[uniqueKey] && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "jsonValue", children: getValue(
                    fieldValue,
                    fieldKey,
                    sourceData,
                    deepLevel,
                    uniqueKey
                  ) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "toolsView", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                    Tools_default,
                    {
                      uniqueKey,
                      fieldValue,
                      fieldKey,
                      sourceData
                    }
                  ) })
                ] }, uniqueKey);
              })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            AddItem_default,
            {
              uniqueKey: parentUniqueKey,
              deepLevel,
              sourceData
            },
            parentUniqueKey
          ) })
        ]
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_Box2.default, { sx: { margin: "5px 0 0 20px" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      AddItem_default,
      {
        uniqueKey: "defaultKay",
        deepLevel,
        sourceData
      }
    ) });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    ConfigContext.Provider,
    {
      value: {
        editObject,
        setEditObject,
        optionsMap,
        onChangeType,
        onClickDelete,
        onChangeAllow,
        allowMap
      },
      children: renderJsonConfig(editObject)
    }
  );
}
var JsonView_default = JsonView;

// app/components/React-Json-Editor/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function JsonEditor(props) {
  let [editObject, setEditObject] = (0, import_react13.useState)(import_lodash2.default.cloneDeep(props.data));
  return (0, import_react13.useEffect)(() => {
    props.onChange(editObject);
  }, [editObject]), /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_Box3.default,
    {
      className: "jsonEditorContainer",
      sx: {
        width: "100%",
        height: 260,
        overflow: "auto",
        paddingRight: 20,
        marginTop: "20px"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        JsonView_default,
        {
          editObject,
          setEditObject,
          optionsMap: props.optionsMap
        }
      )
    }
  );
}
var React_Json_Editor_default = JsonEditor;

// app/utils/payloadMapper/getAllKeys.js
var import_lodash3 = __toESM(require("lodash"));
function getAllKeysWithTypes(jsons) {
  let getKeys = (obj, prefix = "") => import_lodash3.default.flatMap(import_lodash3.default.keys(obj), (key) => {
    let fullPath = prefix ? `${prefix}.${key}` : key, type = import_lodash3.default.isArray(obj[key]) ? "array" : typeof obj[key];
    return import_lodash3.default.isObject(obj[key]) && !import_lodash3.default.isArray(obj[key]) ? [{ key: fullPath, type: "object" }].concat(getKeys(obj[key], fullPath)) : { key: fullPath, type };
  });
  return import_lodash3.default.flatten(jsons.map((json38) => getKeys(json38)));
}

// app/utils/payloadMapper/buildOutputJson.js
var import_lodash5 = __toESM(require("lodash"));

// app/utils/payloadMapper/applyMappingToArrays.js
var import_lodash4 = __toESM(require("lodash"));
function applyMappingToArrays(inputJson, maps) {
  maps.forEach((map) => {
    let { inputField, newMapping } = map;
    if (import_lodash4.default.has(inputJson, inputField) && Array.isArray(import_lodash4.default.get(inputJson, inputField))) {
      let array = import_lodash4.default.get(inputJson, inputField), mapFunction;
      try {
        mapFunction = new Function("obj", `return (${newMapping})(obj);`);
      } catch (error) {
        console.error("Error creating function from newMapping string:", error);
        return;
      }
      typeof mapFunction == "function" ? import_lodash4.default.set(inputJson, inputField, array.map((item) => mapFunction(item))) : console.error("newMapping is not a function");
    }
  });
}

// app/utils/payloadMapper/buildOutputJson.js
function buildNestedObject(schemaValue, inputJsonCopy) {
  if (typeof schemaValue == "object" && !Array.isArray(schemaValue)) {
    let nestedObject = {};
    for (let nestedKey in schemaValue)
      nestedObject[nestedKey] = buildNestedObject(
        schemaValue[nestedKey],
        inputJsonCopy
      );
    return nestedObject;
  } else if (typeof schemaValue == "string")
    if ((schemaValue.match(/</g) || []).length === 1 && (schemaValue.match(/>/g) || []).length === 1 && schemaValue.startsWith("<") && schemaValue.endsWith(">")) {
      let path = schemaValue.slice(1, -1);
      return import_lodash5.default.get(inputJsonCopy, path, "");
    } else
      return schemaValue.replace(
        /<([^>]+)>/g,
        (match, path) => import_lodash5.default.get(inputJsonCopy, path, "")
      );
  else
    return schemaValue;
}
function buildOutputJson(inputJson, outputSchema, maps) {
  let inputJsonCopy = import_lodash5.default.cloneDeep(inputJson);
  applyMappingToArrays(inputJsonCopy, maps);
  let outputJson = {};
  for (let key in outputSchema)
    outputJson[key] = buildNestedObject(outputSchema[key], inputJsonCopy);
  return outputJson;
}

// app/utils/payloadMapper/convertJsons.js
function convertJsons(inputJsons, outputSchemas, maps) {
  let allInputsCombined = Object.assign({}, ...inputJsons);
  return outputSchemas.map(
    (schema) => buildOutputJson(allInputsCombined, schema, maps)
  );
}

// app/components/KeysMapper.tsx
var import_jsx_runtime13 = require("react/jsx-runtime"), KeyMapper = ({ methods, funIndex }) => {
  let [viewType, setViewType] = (0, import_react14.useState)("raw"), [inputPayload, setInputPayload] = (0, import_react14.useState)(""), [inputKeys, setInputKeys] = (0, import_react14.useState)([]), [error, setError] = (0, import_react14.useState)(null), [outputViewType, setOutputViewType] = (0, import_react14.useState)("raw"), [mappingPayload, setMappingPayload] = (0, import_react14.useState)(""), [optionsList, setOptionsList] = (0, import_react14.useState)([]), [result, setResult] = (0, import_react14.useState)([]), { register, setValue, watch, control } = methods, formData = watch();
  (0, import_react14.useEffect)(() => {
    let validateJson = (json38) => {
      try {
        JSON.parse(json38), setError(null);
        let jsonArray = JSON.parse(json38), keysTypes = getAllKeysWithTypes(jsonArray);
        setInputKeys(
          keysTypes?.filter((keyInfo) => keyInfo?.type !== "array")
        );
        let options4 = inputKeys?.map((item) => ({
          value: `<${item.key}>`,
          label: item.key
        }));
        setOptionsList(options4), setValue(
          `design.flow.${funIndex}.inputPayload`,
          JSON.parse(inputPayload)
        );
      } catch (error2) {
        setError("Invalid JSON: " + error2.message);
      }
    };
    inputPayload ? validateJson(viewType === "raw" ? inputPayload : JSON.parse(inputPayload)) : setError(null);
  }, [inputPayload, outputViewType]);
  let handleInputChange = (event) => {
    let input = event.target.value;
    setInputPayload(input);
  }, handleViewTypeChange = (event, newViewType) => {
    newViewType !== null && error == null && setViewType(newViewType);
  }, handleOutputViewTypeChange = (event, newViewType) => {
    newViewType !== null && setOutputViewType(newViewType);
  }, handleEdit = (event) => {
    let input = event.target.value;
    setMappingPayload(input);
    try {
      let data3 = JSON.parse(input);
      setValue(`design.flow.${funIndex}.mappingPayload`, data3);
    } catch (error2) {
      console.error("Invalid JSON:", error2.message);
    }
  }, handleBuildOutputJson = () => {
    if (inputPayload && mappingPayload) {
      let inputJSON = JSON.parse(inputPayload), outputJSON = formData?.design?.flow?.[funIndex]?.mappingPayload?.[0], result2 = convertJsons(inputJSON, [outputJSON], []);
      setValue(`design.flow.${funIndex}.outputPayload`, result2), setResult(result2);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("form", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_material6.Grid, { container: !0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.Grid, { item: !0, p: 2, md: 4, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      import_material6.Box,
      {
        bgcolor: "background.default",
        borderRadius: 4,
        border: "1px solid #ccc",
        p: 2,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_material6.Grid, { container: !0, justifyContent: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.Grid, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.Typography, { variant: "h6", children: "Insert Input Payload" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.Grid, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
              import_material6.ToggleButtonGroup,
              {
                value: viewType,
                exclusive: !0,
                onChange: handleViewTypeChange,
                "aria-label": "view type",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.ToggleButton, { value: "raw", "aria-label": "raw", children: "Raw" }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    import_material6.ToggleButton,
                    {
                      value: "formatted",
                      "aria-label": "formatted",
                      children: "Formatted"
                    }
                  )
                ]
              }
            ) })
          ] }),
          viewType === "raw" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_material6.TextField,
            {
              label: "Input Payload",
              multiline: !0,
              fullWidth: !0,
              minRows: 6,
              maxRows: 10,
              variant: "outlined",
              value: inputPayload,
              onChange: handleInputChange,
              error: Boolean(error),
              helperText: error,
              sx: { mt: 2 }
            }
          ),
          viewType === "formatted" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_material6.Box,
            {
              overflow: "auto",
              borderRadius: 4,
              border: "1px solid #ccc",
              bgcolor: "background.default",
              sx: {
                height: "300px",
                margin: "15px",
                padding: "10px"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                ReactJsonViewer,
                {
                  src: JSON.parse(inputPayload)
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.Grid, { item: !0, p: 2, md: 8, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      import_material6.Box,
      {
        bgcolor: "background.default",
        borderRadius: 4,
        border: "1px solid #ccc",
        p: 2,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_material6.Grid, { container: !0, justifyContent: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.Grid, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.Typography, { variant: "h6", children: "Insert Output Payload" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.Grid, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
              import_material6.ToggleButtonGroup,
              {
                value: outputViewType,
                exclusive: !0,
                onChange: handleOutputViewTypeChange,
                "aria-label": "view type",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.ToggleButton, { value: "raw", "aria-label": "raw", children: "Raw" }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    import_material6.ToggleButton,
                    {
                      value: "formatted",
                      "aria-label": "formatted",
                      children: "Formatted"
                    }
                  )
                ]
              }
            ) })
          ] }),
          outputViewType === "raw" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_material6.TextField,
            {
              label: "Output Payload",
              multiline: !0,
              fullWidth: !0,
              minRows: 6,
              maxRows: 10,
              variant: "outlined",
              value: mappingPayload,
              onChange: handleEdit,
              sx: { mt: 2 }
            }
          ),
          outputViewType === "formatted" && mappingPayload && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            React_Json_Editor_default,
            {
              data: formData?.design?.flow?.[funIndex]?.mappingPayload,
              onChange: (data3) => setValue(
                `design.flow.${funIndex}.mappingPayload`,
                data3
              ),
              width: "1000px",
              optionsMap: { default: optionsList }
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      import_material6.Grid,
      {
        container: !0,
        sx: { display: "flex", flexDirection: "column" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material6.Grid, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_material6.Button,
            {
              onClick: handleBuildOutputJson,
              variant: "outlined",
              sx: { margin: "0px 15px" },
              children: "Build Output JSON"
            }
          ) }),
          result && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_material6.Grid,
            {
              item: !0,
              overflow: "auto",
              borderRadius: 4,
              border: "1px solid #ccc",
              bgcolor: "background.default",
              sx: {
                height: "500px",
                width: "500px",
                margin: "15px",
                padding: "10px"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ReactJsonViewer, { src: result })
            }
          )
        ]
      }
    )
  ] }) });
}, KeysMapper_default = KeyMapper;

// app/routes/user.workflows.list.add.$formNo.design.key-mapping.$funIndex.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function KeyMapper2() {
  let { formNo, funIndex } = (0, import_react15.useParams)(), { methods } = useParentData(), navigate = (0, import_react15.useNavigate)(), onSave = () => {
    navigate("..");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_Grid.default, { p: 2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(KeysMapper_default, { funIndex: Number(funIndex), methods }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      SubmitOrSave_default,
      {
        name: "Save",
        onClick: onSave
      }
    )
  ] }) });
}

// app/routes/user.user-management.list.$id.password-change.tsx
var user_user_management_list_id_password_change_exports = {};
__export(user_user_management_list_id_password_change_exports, {
  action: () => action,
  default: () => CustomerUserResetPassword
});

// app/components/customers/forms/UserForm/CustomerResetPassForm.tsx
var import_material8 = require("@mui/material"), import_react17 = require("@remix-run/react"), import_react18 = require("react"), import_react_hook_form = require("react-hook-form");

// app/components/Form/BackButton.tsx
var import_material7 = require("@mui/material"), import_ArrowBackIos = __toESM(require("@mui/icons-material/ArrowBackIos")), import_react16 = require("@remix-run/react"), import_jsx_runtime15 = require("react/jsx-runtime"), BackButton = ({ url }) => {
  let navigate = (0, import_react16.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    import_material7.Button,
    {
      variant: "outlined",
      color: "primary",
      size: "small",
      style: {
        marginTop: "-1.5rem",
        marginBottom: "1.5rem",
        color: "gray",
        fontSize: "0.8rem",
        borderColor: "gray"
      },
      onClick: url ? () => navigate(url) : () => navigate(-1),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_ArrowBackIos.default, { style: { fontSize: "0.8rem" } }),
        "BACK"
      ]
    }
  );
}, BackButton_default = BackButton;

// app/components/Form/FormFields/SimpleTextField.tsx
var import_TextField2 = __toESM(require("@mui/material/TextField")), import_jsx_runtime16 = require("react/jsx-runtime"), SimpleTextField = ({
  register,
  fieldName,
  label,
  required = !1,
  props,
  multiline = !1,
  rows = 4
  // Default to 4 rows for multiline
}) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  import_TextField2.default,
  {
    ...register(fieldName),
    name: fieldName,
    label,
    variant: "outlined",
    fullWidth: !0,
    margin: "normal",
    size: "small",
    required,
    multiline,
    rows,
    helperText: props?.errors?.[props?.name]?.message || null,
    error: !!props?.errors?.[props?.name]?.message,
    ...props
  }
), SimpleTextField_default = SimpleTextField;

// app/components/customers/forms/UserForm/CustomerResetPassForm.tsx
var import_jsx_runtime17 = require("react/jsx-runtime"), CustomerRestPassFormFields = ({ isDisabled, setIsDisabled }) => {
  let { register, watch } = (0, import_react_hook_form.useForm)({}), formData = watch();
  return (0, import_react18.useEffect)(() => {
    formData.password === formData.confirmPassword ? setIsDisabled(!1) : setIsDisabled(!0);
  }, [formData.password, formData.confirmPassword]), /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_material8.Grid, { container: !0, spacing: 1, style: { alignItems: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_material8.Grid, { item: !0, xs: 12, sm: 6, children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_material8.Typography, { children: "Password" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        import_material8.Typography,
        {
          style: {
            fontSize: "11.5px"
          },
          children: "Enter the password of the user."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_material8.Grid, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "password",
        label: "Password",
        props: { type: "password" },
        required: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_material8.Grid, { item: !0, xs: 12, sm: 6, children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_material8.Typography, { children: "Confirm Password" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        import_material8.Typography,
        {
          style: {
            fontSize: "11.5px"
          },
          children: "Again enter the password"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_material8.Grid, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "confirmPassword",
        label: "Confirm Password",
        required: !0,
        props: {
          name: "confirmPassword",
          type: "password",
          errors: formData.password !== formData.confirmPassword ? {
            confirmPassword: { message: "error" }
          } : null
        }
      }
    ) })
  ] });
};
function CustomerResetPassForm({}) {
  let [isDisabled, setIsDisabled] = (0, import_react18.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react17.Form, { method: "POST", action: ".", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_material8.Grid, { container: !0, spacing: 2, marginTop: 1, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_material8.Grid, { item: !0, xs: 8, children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_material8.Box, { sx: { display: "flex", placeItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(BackButton_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_material8.Typography, { variant: "h5", sx: { flexGrow: 1, textAlign: "center", fontWeight: 500, mb: 2 }, color: "initial", children: "Reset User Password" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_material8.Grid, { container: !0, alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CustomerRestPassFormFields, { isDisabled, setIsDisabled }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SubmitOrSave_default, { disabled: isDisabled })
  ] }) });
}
var CustomerResetPassForm_default = CustomerResetPassForm;

// app/routes/user.user-management.list.$id.password-change.tsx
var import_jsx_runtime18 = require("react/jsx-runtime"), action = async ({ request, params }) => {
  let { id } = params, formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries());
  return null;
};
function CustomerUserResetPassword() {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CustomerResetPassForm_default, {});
}

// app/routes/user.workflows.list.add.$formNo.design._index.tsx
var user_workflows_list_add_formNo_design_index_exports = {};
__export(user_workflows_list_add_formNo_design_index_exports, {
  default: () => CustomerWorkflowDesignAdd
});
var import_react22 = require("react"), import_react23 = require("@remix-run/react"), import_Grid5 = __toESM(require("@mui/material/Grid")), import_Button4 = __toESM(require("@mui/material/Button"));

// app/components/Workflow/WorkFlowBuilder.tsx
var import_react20 = __toESM(require("react")), import_Grid4 = __toESM(require("@mui/material/Grid")), import_Card = __toESM(require("@mui/material/Card")), import_Drawer = __toESM(require("@mui/material/Drawer")), import_Typography3 = __toESM(require("@mui/material/Typography")), import_react_hook_form4 = require("react-hook-form"), import_IconButton2 = __toESM(require("@mui/material/IconButton")), import_react21 = require("@remix-run/react");

// app/components/Workflow/forms/ApiEndpointForm.tsx
var import_material9 = require("@mui/material"), import_Button2 = __toESM(require("@mui/material/Button")), import_Grid2 = __toESM(require("@mui/material/Grid")), import_TextField3 = __toESM(require("@mui/material/TextField")), import_Typography = __toESM(require("@mui/material/Typography")), import_react_hook_form2 = require("react-hook-form"), import_jsx_runtime19 = require("react/jsx-runtime"), ApiEndpointForm = ({ onSubmit, functionObj }) => {
  let { handleSubmit, register } = (0, import_react_hook_form2.useForm)();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("form", { onSubmit: handleSubmit((data3) => {
    onSubmit(data3, functionObj);
  }), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    import_Grid2.default,
    {
      container: !0,
      mt: 3,
      spacing: 2,
      sx: {
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_Grid2.default, { item: !0, alignContent: "center", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_Typography.default, { variant: "h6", textAlign: "center", children: "API Endpoint Form" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_Grid2.default, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
          import_TextField3.default,
          {
            select: !0,
            size: "small",
            fullWidth: !0,
            label: "API Type",
            ...register("apiType"),
            required: !1,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_material9.MenuItem, { value: "orderCreation", children: "Order Creation" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_material9.MenuItem, { value: "courierAggregator", children: "Courier Aggregator" })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_Grid2.default,
          {
            item: !0,
            sx: {
              display: "flex",
              justifyContent: "center",
              mt: 2
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_Button2.default, { type: "submit", variant: "contained", children: "Submit" })
          }
        )
      ]
    }
  ) });
}, ApiEndpointForm_default = ApiEndpointForm;

// app/components/Workflow/forms/ApiCallerForm.tsx
var import_Box4 = __toESM(require("@mui/material/Box")), import_Button3 = __toESM(require("@mui/material/Button")), import_FormControlLabel = __toESM(require("@mui/material/FormControlLabel")), import_Grid3 = __toESM(require("@mui/material/Grid")), import_IconButton = __toESM(require("@mui/material/IconButton")), import_Switch = __toESM(require("@mui/material/Switch")), import_TextField4 = __toESM(require("@mui/material/TextField")), import_Typography2 = __toESM(require("@mui/material/Typography")), import_react19 = require("react"), import_react_hook_form3 = require("react-hook-form"), import_AddCircle2 = __toESM(require("@mui/icons-material/AddCircle")), import_Delete = __toESM(require("@mui/icons-material/Delete")), import_jsx_runtime20 = require("react/jsx-runtime"), ApiCallerForm = ({ onSubmit, functionObj }) => {
  let { handleSubmit, register, control, watch } = (0, import_react_hook_form3.useForm)();
  console.log(watch());
  let submitForm = (data3) => {
    onSubmit(data3, functionObj);
  }, [authMethod, setAuthMethod] = (0, import_react19.useState)(
    "apikey"
  ), { fields, append, remove } = (0, import_react_hook_form3.useFieldArray)({
    control,
    name: "headers"
  }), handleAuthMethodChange = (event) => {
    setAuthMethod(event.target.checked ? "apicall" : "apikey");
  }, handleAppendObject = () => {
    append({ key: "", value: "" });
  }, handleRemoveHeader = (index) => {
    remove(index);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("form", { onSubmit: handleSubmit(submitForm), children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      import_Grid3.default,
      {
        container: !0,
        mt: 3,
        spacing: 2,
        sx: {
          display: "flex",
          flexDirection: "column"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Grid3.default, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Typography2.default, { variant: "h6", textAlign: "center", children: "API Caller Form" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_Grid3.default, { item: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Typography2.default, { children: "API Endpoint" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              import_TextField4.default,
              {
                fullWidth: !0,
                size: "small",
                ...register("apiEndpoint"),
                placeholder: "Enter API Endpoint",
                name: "apiEndpoint"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_Grid3.default, { item: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Typography2.default, { children: "Headers" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
              import_Box4.default,
              {
                onClick: handleAppendObject,
                sx: {
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    import_AddCircle2.default,
                    {
                      fontSize: "small",
                      sx: { color: "text.primary", mr: 1 }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                    import_Typography2.default,
                    {
                      variant: "body2",
                      sx: { color: "text.primary" },
                      children: [
                        "Add Header",
                        " "
                      ]
                    }
                  )
                ]
              }
            ),
            fields?.map((header, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Grid3.default, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
              import_Grid3.default,
              {
                container: !0,
                spacing: 2,
                mt: 0.5,
                sx: {
                  display: "flex",
                  alignItems: "center"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Grid3.default, { item: !0, xs: 5, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    import_TextField4.default,
                    {
                      size: "small",
                      ...register(`headers.${index}.key`),
                      name: `headers.${index}.key`,
                      placeholder: "key",
                      label: "key"
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Grid3.default, { item: !0, xs: 5, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    import_TextField4.default,
                    {
                      size: "small",
                      ...register(`headers.${index}.value`),
                      name: `headers.${index}.value`,
                      placeholder: "value",
                      label: "value"
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Grid3.default, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    import_IconButton.default,
                    {
                      onClick: () => handleRemoveHeader(index),
                      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Delete.default, {})
                    }
                  ) })
                ]
              }
            ) }, header.id))
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      import_Grid3.default,
      {
        container: !0,
        mt: 3,
        spacing: 2,
        sx: {
          display: "flex",
          flexDirection: "column"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_Grid3.default, { item: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Typography2.default, { variant: "h6", textAlign: "center", children: "Authentication" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              import_FormControlLabel.default,
              {
                control: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  import_Switch.default,
                  {
                    checked: authMethod === "apicall",
                    onChange: handleAuthMethodChange
                  }
                ),
                label: "Use API Call for Authentication"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_Grid3.default, { item: !0, children: [
            authMethod === "apikey" && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Typography2.default, { children: "API Key" }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                import_TextField4.default,
                {
                  ...register("apiKey"),
                  fullWidth: !0,
                  size: "small",
                  name: "apiKey",
                  placeholder: "Enter API Key"
                }
              )
            ] }),
            authMethod === "apicall" && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
              import_Grid3.default,
              {
                container: !0,
                spacing: 2,
                sx: {
                  display: "flex",
                  flexDirection: "column"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_Grid3.default, { item: !0, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Typography2.default, { children: "Auth API Endpoint" }),
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                      import_TextField4.default,
                      {
                        fullWidth: !0,
                        size: "small",
                        ...register("auth.authApi"),
                        placeholder: "Enter Auth API",
                        name: "auth.authApi"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_Grid3.default, { item: !0, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Typography2.default, { children: "Headers" }),
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                      import_Box4.default,
                      {
                        onClick: handleAppendObject,
                        sx: {
                          display: "flex",
                          cursor: "pointer",
                          alignItems: "center"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                            import_AddCircle2.default,
                            {
                              fontSize: "small",
                              sx: {
                                color: "text.primary",
                                mr: 1
                              }
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                            import_Typography2.default,
                            {
                              variant: "body2",
                              sx: {
                                color: "text.primary"
                              },
                              children: [
                                "Add Header",
                                " "
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    fields?.map((header, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Grid3.default, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                      import_Grid3.default,
                      {
                        container: !0,
                        spacing: 2,
                        mt: 0.5,
                        sx: {
                          display: "flex",
                          alignItems: "center"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Grid3.default, { item: !0, xs: 5, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                            import_TextField4.default,
                            {
                              size: "small",
                              ...register(
                                `auth.headers.${index}.key`
                              ),
                              name: `auth.headers.${index}.key`,
                              placeholder: "key",
                              label: "key"
                            }
                          ) }),
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Grid3.default, { item: !0, xs: 5, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                            import_TextField4.default,
                            {
                              size: "small",
                              ...register(
                                `auth.headers.${index}.value`
                              ),
                              name: `auth.headers.${index}.value`,
                              placeholder: "value",
                              label: "value"
                            }
                          ) }),
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Grid3.default, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                            import_IconButton.default,
                            {
                              onClick: () => handleRemoveHeader(
                                index
                              ),
                              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Delete.default, {})
                            }
                          ) })
                        ]
                      }
                    ) }, header.id))
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_Grid3.default, { item: !0, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Typography2.default, { children: "User Name" }),
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                      import_TextField4.default,
                      {
                        fullWidth: !0,
                        size: "small",
                        ...register("auth.username"),
                        placeholder: "Enter User Name",
                        name: "auth.username"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_Grid3.default, { item: !0, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Typography2.default, { children: "Password" }),
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                      import_TextField4.default,
                      {
                        fullWidth: !0,
                        size: "small",
                        ...register("auth.password"),
                        placeholder: "Enter Password",
                        name: "auth.password"
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_Grid3.default,
            {
              item: !0,
              sx: {
                display: "flex",
                justifyContent: "center",
                mt: 2
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_Button3.default, { type: "submit", variant: "contained", children: "Submit" })
            }
          )
        ]
      }
    )
  ] });
}, ApiCallerForm_default = ApiCallerForm;

// app/components/Workflow/WorkFlowBuilder.tsx
var import_Close = __toESM(require("@mui/icons-material/Close")), import_jsx_runtime21 = require("react/jsx-runtime"), WorkflowBuilder = ({ workflow, control }) => {
  let [drawerOpen, setDrawerOpen] = (0, import_react20.useState)(!1), [selectedFunction, setSelectedFunction] = (0, import_react20.useState)(), { fields, append, update, remove } = (0, import_react_hook_form4.useFieldArray)({
    control,
    name: "design.flow"
  }), navigate = (0, import_react21.useNavigate)(), handleDragStart = (e, draggedFunction) => {
    e.dataTransfer.setData("text/plain", draggedFunction);
  }, handleDragOver = (e, overSeq) => {
    e.preventDefault();
  }, handleDrop = (e, dropSeq) => {
    e.preventDefault();
    let draggedFunction = e.dataTransfer.getData("text/plain");
    if (draggedFunction) {
      let curSeq = fields.length + 1, lastFunctionIndex = fields.length - 1;
      if (lastFunctionIndex > -1) {
        let lastFun = {
          ...fields[lastFunctionIndex],
          next: [lastFunctionIndex + 1]
        };
        update(lastFunctionIndex, lastFun);
      }
      let newFunction = {
        fn: draggedFunction,
        seq: curSeq,
        prev: lastFunctionIndex > -1 ? fields[lastFunctionIndex]?.seq : null,
        next: null,
        credentials: {}
      };
      append(newFunction);
    }
  }, handleFunctionClick = (functionName, index) => {
    setSelectedFunction({ name: functionName, index }), functionName === "JSON to JSON Converter" ? navigate(`./key-mapping/${index}`) : setDrawerOpen(!0);
  }, handleDrawerClose = () => {
    setSelectedFunction(void 0), setDrawerOpen(!1);
  }, handleApiEndpointFormSubmit = (data3, functionObj) => {
    let currentFunctionObj = {
      ...fields[functionObj?.index],
      credentials: data3
    };
    update(functionObj?.index, currentFunctionObj), setDrawerOpen(!1);
  }, handleApiCallerFormSubmit = (data3, functionObj) => {
    let currentFunctionObj = {
      ...fields[functionObj?.index],
      credentials: data3
    };
    update(functionObj?.index, currentFunctionObj), setDrawerOpen(!1);
  }, renderForm = () => {
    switch (selectedFunction?.name) {
      case "API Endpoint":
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          ApiEndpointForm_default,
          {
            onSubmit: handleApiEndpointFormSubmit,
            functionObj: selectedFunction
          }
        );
      case "API Caller":
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          ApiCallerForm_default,
          {
            onSubmit: handleApiCallerFormSubmit,
            functionObj: selectedFunction
          }
        );
      default:
        return null;
    }
  }, handleFunctionRemove = (index) => {
    let newFileds = [...fields];
    newFileds.splice(index, 1), newFileds.map((step, ind) => ({
      ...step,
      seq: ind + 1,
      prev: ind === 0 ? null : ind,
      next: ind === newFileds.length - 1 ? null : [ind + 2]
    })).forEach((updatedStep, index2) => {
      update(index2, updatedStep);
    }), remove(fields.length - 1);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_Grid4.default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_Typography3.default, { sx: { fontWeight: 600, fontSize: "20px" }, children: "Workflow Builder" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      import_Grid4.default,
      {
        onDragOver: (e) => handleDragOver(e, workflow.flow.length + 1),
        onDrop: (e) => handleDrop(e, workflow.flow.length + 1),
        sx: {
          minWidth: "60vw",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        },
        children: fields?.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_react20.default.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
            import_Card.default,
            {
              draggable: !0,
              onDragStart: (e) => handleDragStart(e, step.fn),
              onDragOver: (e) => handleDragOver(e, step.seq),
              onDrop: (e) => handleDrop(e, step.seq),
              sx: {
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                padding: "8px",
                margin: "8px 0px",
                cursor: "pointer",
                height: "50px"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  import_Grid4.default,
                  {
                    onClick: () => handleFunctionClick(step.fn, index),
                    children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_Typography3.default, { children: step.fn })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_Grid4.default, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  import_IconButton2.default,
                  {
                    onClick: () => handleFunctionRemove(index),
                    children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_Close.default, {})
                  }
                ) })
              ]
            }
          ),
          step.next !== null && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
            "svg",
            {
              style: {
                margin: "15px 0px 0px 0px",
                width: "90px",
                height: "20px"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  "line",
                  {
                    x1: "0",
                    y1: "15",
                    x2: "50",
                    y2: "15",
                    stroke: "black"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  "polygon",
                  {
                    points: "50,10 60,15 50,20",
                    fill: "black"
                  }
                )
              ]
            },
            `${step.seq}-${step.next}`
          ),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            import_Drawer.default,
            {
              anchor: "right",
              open: drawerOpen,
              onClose: handleDrawerClose,
              children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                import_Grid4.default,
                {
                  sx: {
                    width: "450px",
                    padding: "20px",
                    marginTop: "20px"
                  },
                  children: renderForm()
                },
                index
              )
            },
            index
          )
        ] }, index))
      }
    )
  ] });
}, WorkFlowBuilder_default = WorkflowBuilder;

// app/components/Workflow/FunctionList.tsx
var import_Accordion = __toESM(require("@mui/material/Accordion")), import_AccordionDetails = __toESM(require("@mui/material/AccordionDetails")), import_AccordionSummary = __toESM(require("@mui/material/AccordionSummary")), import_ExpandMore2 = __toESM(require("@mui/icons-material/ExpandMore")), import_Typography4 = __toESM(require("@mui/material/Typography")), import_Card2 = __toESM(require("@mui/material/Card"));

// app/data/functionList.ts
var functionCategories = {
  Inbound: [
    { title: "API Endpoint", component: ApiEndpointForm_default },
    { title: "Schedule Job Customer Endpoint", component: ApiEndpointForm_default }
  ],
  Processing: [
    {
      title: "JSON to JSON Converter",
      component: ApiEndpointForm_default
    }
  ],
  Outbound: [{ title: "API Caller", component: ApiEndpointForm_default }]
}, functionList_default = functionCategories;

// app/components/Workflow/FunctionList.tsx
var import_jsx_runtime22 = require("react/jsx-runtime"), FunctionList = () => {
  let handleDragStart = (e, fn) => {
    e.dataTransfer.setData("text/plain", fn);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: Object.entries(functionList_default).map(([category, functions]) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    import_Accordion.default,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_AccordionSummary.default, { expandIcon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_ExpandMore2.default, {}), children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_Typography4.default, { variant: "h6", children: category }) }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_AccordionDetails.default, { children: functions.map((fn, index) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          import_Card2.default,
          {
            draggable: !0,
            onDragStart: (e) => handleDragStart(e, fn.title),
            sx: {
              border: "1px solid #ccc",
              padding: "8px",
              margin: "10px 0",
              cursor: "pointer"
            },
            children: fn.title
          },
          index
        )) })
      ]
    },
    category
  )) });
}, FunctionList_default = FunctionList;

// app/routes/user.workflows.list.add.$formNo.design._index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function CustomerWorkflowDesignAdd({
  defaultValues
}) {
  let { methods } = useParentData(), fetcher = (0, import_react23.useFetcher)(), [workflow, setWorkflow] = (0, import_react22.useState)({
    flow: []
  }), { control, setValue, watch } = methods, formData = watch(), onSubmit = () => {
    fetcher.submit(
      { data: JSON.stringify(formData) },
      { method: "POST", action: "../.." }
    );
  }, handleWorkflowChange = (newWorkflow) => {
    setWorkflow(newWorkflow);
  };
  return (0, import_react22.useEffect)(() => {
    handleWorkflowChange(workflow);
  }, [workflow, setValue]), /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_Grid5.default, { container: !0, spacing: 2, p: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_Grid5.default, { item: !0, xs: 6, md: 3, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(FunctionList_default, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_Grid5.default, { item: !0, xs: 6, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(WorkFlowBuilder_default, { control, workflow }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_Grid5.default, { sx: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_Button4.default, { variant: "contained", onClick: onSubmit, children: "Submit" }) })
  ] });
}

// app/routes/user.user-management.list.$id.activate.tsx
var user_user_management_list_id_activate_exports = {};
__export(user_user_management_list_id_activate_exports, {
  action: () => action2,
  default: () => CustomerUserActivateModal,
  loader: () => loader
});

// app/components/Modal/index.tsx
var import_Button5 = __toESM(require("@mui/material/Button")), import_Dialog = __toESM(require("@mui/material/Dialog")), import_DialogTitle = __toESM(require("@mui/material/DialogTitle")), import_DialogContent = __toESM(require("@mui/material/DialogContent")), import_DialogActions = __toESM(require("@mui/material/DialogActions"));
var import_jsx_runtime24 = require("react/jsx-runtime"), Modal = ({
  show,
  children,
  maxWidth,
  modalTitle,
  transition,
  closeModal
}) => {
  let windowSize = useWindowSize_default();
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    import_Dialog.default,
    {
      open: show,
      fullWidth: !0,
      fullScreen: windowSize?.width < 700 && (!maxWidth || maxWidth === "lg"),
      maxWidth: maxWidth || "md",
      PaperProps: { sx: { backgroundColor: "table.background" } },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_DialogTitle.default, { sx: { pl: "20px", fontSize: "18px" }, children: modalTitle }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          import_DialogContent.default,
          {
            style: {
              paddingTop: 10,
              padding: closeModal ? "0 15px 20px 20px" : "0 15px 0 20px"
            },
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_DialogActions.default, { children: closeModal && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          import_Button5.default,
          {
            size: "small",
            sx: { m: 1 },
            color: "error",
            variant: "contained",
            onClick: () => closeModal(),
            children: "Close"
          }
        ) })
      ]
    }
  );
}, Modal_default = Modal;

// app/routes/user.user-management.list.$id.activate.tsx
var import_react25 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/session.server.tsx
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/utils/mongoDb/db.server.ts
var import_mongodb = require("mongodb"), connectionString = process.env.MONGODB_CROSSDOCK_URI || "";
if (!connectionString)
  throw new Error("No connection string provided. \n\nPlease create a `.env` file in the root of this project. Add a MONGODB_CROSSDOCK_URI variable to that file with the connection string to your MongoDB cluster.");
var mongodb;
mongodb = new import_mongodb.MongoClient(connectionString);
var ObjectId = import_mongodb.BSON.ObjectId;

// app/utils/mongoDb/adminDb.server.ts
var import_mongodb2 = require("mongodb"), uri = process.env.MONGODB_SAAS_ADMIN_URI || "", options = {};
if (!process.env.MONGODB_SAAS_ADMIN_URI)
  throw new Error("Please add your ADMIN MongoDB URI to .env.local");
var client = new import_mongodb2.MongoClient(uri, options), saasAdminClientPromise = client.connect(), adminDb_server_default = saasAdminClientPromise;

// app/models/user.server.ts
async function getUserById(id) {
  return await (await adminDb_server_default).db(process.env.MONGODB_SAAS_ADMIN_DB).collection("saasUsers").findOne({ _id: new ObjectId(id) });
}
async function checkIfUserExists(email) {
  return await (await adminDb_server_default).db(process.env.MONGODB_SAAS_ADMIN_DB).collection("saasUsers").findOne({ email });
}
async function verifyLogin(email, password) {
  let adminDb = (await adminDb_server_default).db(process.env.MONGODB_SAAS_ADMIN_DB), userWithPassword = await adminDb.collection("saasUsers").findOne({ email });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(password, userWithPassword.password))
    return null;
  if (!await adminDb.collection("company").findOne({ _id: new ObjectId(userWithPassword.companyId) }))
    throw new Error("User company not found!");
  return {
    _id: userWithPassword._id,
    email: userWithPassword.email,
    isAdmin: userWithPassword.isAdmin,
    name: userWithPassword.name,
    companyId: userWithPassword.companyId
    // companyDb: companyObject.lpaConfig.db,
  };
}

// app/session.server.tsx
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !0
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUserCompanyId(request) {
  return (await getSession(request)).get("companyId");
}
async function getIsUserAdmin(request) {
  return (await getSession(request)).get("isAdmin");
}
async function getCompanyDb(request) {
  return (await getSession(request)).get("companyId");
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  name,
  userId,
  companyId,
  // companyDb,
  isAdmin,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), session.set("isAdmin", isAdmin), session.set("name", name), session.set("companyId", companyId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : 60 * 60
        // 1 hr
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/components/customers/common/ConfirmationBox.tsx
var import_react24 = require("@remix-run/react"), import_Box5 = __toESM(require("@mui/material/Box")), import_Typography5 = __toESM(require("@mui/material/Typography")), import_CheckCircleOutline = __toESM(require("@mui/icons-material/CheckCircleOutline")), import_HighlightOff = __toESM(require("@mui/icons-material/HighlightOff"));

// app/components/SubmitCloseComponent.tsx
var import_Grid6 = __toESM(require("@mui/material/Grid")), import_Button6 = __toESM(require("@mui/material/Button")), import_jsx_runtime25 = require("react/jsx-runtime"), SubmitCloseComponent = ({
  onClose,
  onSubmit,
  hideClose,
  closeText,
  submitText,
  hideSubmit,
  disableClose,
  disableSubmit
}) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_Grid6.default, { container: !0, justifyContent: "flex-end", sx: { mt: 5 }, children: [
  !hideClose && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    import_Button6.default,
    {
      size: "small",
      color: "error",
      sx: { mr: 1 },
      variant: "contained",
      onClick: onClose,
      disabled: disableClose,
      children: closeText || "Close"
    }
  ),
  !hideSubmit && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    import_Button6.default,
    {
      size: "small",
      type: "submit",
      color: "success",
      variant: "contained",
      onClick: onSubmit,
      disabled: disableSubmit,
      children: submitText || "Submit"
    }
  )
] }), SubmitCloseComponent_default = SubmitCloseComponent;

// app/components/customers/common/ConfirmationBox.tsx
var import_jsx_runtime26 = require("react/jsx-runtime"), ConfirmationBox = ({
  deactivated,
  action: action28,
  name
}) => {
  let navigate = (0, import_react24.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_react24.Form, { method: "post", id: "activateUserForm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_Box5.default, { sx: { display: "flex", alignItems: "center" }, children: [
      deactivated ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        import_CheckCircleOutline.default,
        {
          sx: {
            color: "green",
            fontSize: 24,
            marginRight: 1
          }
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        import_HighlightOff.default,
        {
          sx: {
            color: "red",
            fontSize: 24,
            marginRight: 1
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
        import_Typography5.default,
        {
          variant: "body1",
          children: [
            "Are you sure you want to",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
              import_Typography5.default,
              {
                variant: "body1",
                component: "span",
                sx: {
                  color: "orange"
                },
                children: action28
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_Typography5.default, { variant: "body1", ml: 0.5, children: [
        name,
        "?"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("input", { type: "hidden", name: "action", value: action28 }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(SubmitCloseComponent_default, { onClose: () => navigate(-1) })
  ] });
}, ConfirmationBox_default = ConfirmationBox;

// app/routes/user.user-management.list.$id.activate.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
async function loader({ request, params }) {
  let { id } = params, cookie = await getSession(request), message = cookie.get("message") || null;
  return (0, import_node3.json)(
    // { message, userObject },
    {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(cookie)
      }
    }
  );
}
async function action2({ request, params }) {
  let { id } = params, userId = await getUserId(request), cookie = await getSession(request), action28 = (await request.formData()).get("action");
  try {
    return (0, import_node3.redirect)("../", {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(cookie)
      }
    });
  } catch (e) {
    return cookie.set("message", `Error: ${e.message}`), (0, import_node3.redirect)("", {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(cookie)
      }
    });
  }
}
function CustomerUserActivateModal() {
  let { userObject } = (0, import_react25.useLoaderData)(), action28 = userObject?.deactivated ? "activate" : "deactivate";
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    Modal_default,
    {
      show: !0,
      maxWidth: "sm",
      modalTitle: `${userObject?.deactivated ? "Activate" : "Deactivate"} User`,
      children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        ConfirmationBox_default,
        {
          action: action28,
          deactivated: userObject?.deactivated,
          name: userObject?.userName
        }
      )
    }
  );
}

// app/routes/user.workflows.list.add.$formNo.design.tsx
var user_workflows_list_add_formNo_design_exports = {};
__export(user_workflows_list_add_formNo_design_exports, {
  default: () => CustomerWorkflowAdd
});
var import_react26 = require("@remix-run/react");
var import_jsx_runtime28 = require("react/jsx-runtime");
function CustomerWorkflowAdd() {
  let { formNo } = (0, import_react26.useParams)(), { methods } = useParentData();
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    Outlet2,
    {
      data: {
        methods
      }
    }
  );
}

// app/routes/user.user-management.list.$vid._index.tsx
var user_user_management_list_vid_index_exports = {};
__export(user_user_management_list_vid_index_exports, {
  action: () => action3,
  default: () => CustomerWorkflowViewIndex,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_jsx_runtime29 = require("react/jsx-runtime"), loader2 = async () => (0, import_node4.json)({}), action3 = async ({ request }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries());
  return {};
};
function CustomerWorkflowViewIndex() {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h1", { children: "View a customer user." });
}

// app/routes/api.ext.post.$customerId.$workflowId.tsx
var api_ext_post_customerId_workflowId_exports = {};
__export(api_ext_post_customerId_workflowId_exports, {
  action: () => action4
});
var import_node5 = require("@remix-run/node"), import_mongodb11 = require("mongodb");

// app/utils/pipeline/initiateWorkflow.tsx
var import_mongodb10 = require("mongodb");

// app/utils/pipeline/initiateTrace.tsx
var import_mongodb9 = require("mongodb");

// app/utils/pipeline/inbound/index.tsx
var import_mongodb5 = require("mongodb");

// app/utils/pipeline/inbound/customFunction/createOrder.tsx
var import_mongodb3 = require("mongodb");
var createOrder = async (workflowTraceId, companyDb, argument) => {
  let response2 = {
    success: !1,
    message: "Create Order Function not started",
    data: null
  };
  try {
    return response2 = {
      success: !0,
      message: "Order created",
      data: (await mongodb.db(companyDb).collection("orders").insertOne({
        ...argument,
        awbNumber: null,
        createdAt: /* @__PURE__ */ new Date(),
        status: "Created",
        workflowTraceId: new import_mongodb3.ObjectId(workflowTraceId),
        logs: [
          {
            description: "Order created",
            at: /* @__PURE__ */ new Date()
          }
        ]
      })).insertedId
    }, response2;
  } catch (err) {
    return console.log(err), response2 = {
      success: !1,
      message: err?.message
    }, response2;
  }
}, createOrder_default = createOrder;

// app/utils/pipeline/inbound/customFunction/index.tsx
var import_mongodb4 = require("mongodb"), customFunction = async (traceId, fnName, companyDb, argument) => {
  console.log(`Trace ID : ${traceId} || Custom Function Started`);
  let response2 = {
    success: !1,
    message: "Not Started",
    data: null
  }, traceobject = await mongodb.db(companyDb).collection("trace").findOne({
    _id: new import_mongodb4.ObjectId(traceId)
  });
  switch (fnName) {
    case "orderCreation":
      console.log(`Trace ID : ${traceId} || Create Order Custom Function Started`), response2 = await createOrder_default(traceobject?.workflowTraceId, companyDb, argument);
      break;
    default:
      console.log(`Trace ID : ${traceId} || Customer Function ${fnName} not found`), response2 = {
        success: !1,
        message: "Function not found"
      };
  }
  return console.log(`Trace ID : ${traceId} || Custom Function Returned`), response2;
}, customFunction_default = customFunction;

// app/utils/pipeline/inbound/index.tsx
var inbound = async (_id, companyDb, subFn) => {
  console.log(`Trace ID: ${_id} || Starting inbound Process`);
  let response2 = {
    success: !1,
    message: "Not Started",
    data: null
  }, functionResponse = {
    success: !1,
    message: "Not Started",
    data: null
  };
  try {
    let trace = await mongodb.db(companyDb).collection("trace").findOne({
      _id: new import_mongodb5.ObjectId(_id)
    });
    return trace ? (response2 = {
      success: !0,
      message: "Executed Successfully",
      data: trace?.argument
    }, subFn && (functionResponse = await customFunction_default(_id, subFn, companyDb, trace?.argument), response2 = {
      ...functionResponse,
      data: trace?.argument
    }), console.log(`Trace ID : ${_id} || Inbound Process returned`), response2) : (console.log(`Trace ID : ${_id} || not found`), {
      success: !1,
      message: "Trace ID not found"
    });
  } catch (err) {
    return console.error(err), console.log(`Trace ID : ${_id} || Something went wrong while processing the Inbound request`), {
      success: !1,
      message: err?.message
    };
  }
}, inbound_default = inbound;

// app/utils/pipeline/outbound/index.tsx
var import_mongodb7 = require("mongodb");

// app/utils/pipeline/outbound/customFunction/updateOrderNumber.tsx
var import_mongodb6 = require("mongodb"), updateOrderNumber = async (workflowTraceId, companyDb, data3) => {
  let response2 = {
    success: !1,
    message: "updateOrderNumber not started",
    data: null
  }, db = mongodb.db(companyDb), order = await db.collection("orders").findOne({
    workflowTraceId: new import_mongodb6.ObjectId(workflowTraceId)
  }), logs2 = order?.logs;
  return logs2.push({
    description: "AWB Number assigned",
    at: /* @__PURE__ */ new Date()
  }), await db.collection("orders").updateOne({
    _id: new import_mongodb6.ObjectId(order?._id)
  }, {
    $set: {
      awbNumber: data3?.awbNo,
      status: "AWB Number assigned",
      logs: logs2
    }
  }), response2 = {
    success: !0,
    message: "Order updated",
    data: data3
  }, response2;
}, updateOrderNumber_default = updateOrderNumber;

// app/utils/pipeline/outbound/index.tsx
var outbound = async (_id, companyDb, subFn) => {
  console.log(`Trace ID: ${_id} || Starting Outbound Process`);
  let db = mongodb.db(companyDb), response2 = {
    success: !1,
    message: "updateOrderNumber not started",
    data: null
  }, trace = await db.collection("trace").findOne({
    _id: new import_mongodb7.ObjectId(_id)
  }), workflowTraceObject = await db.collection("workflowTrace").findOne({ _id: new import_mongodb7.ObjectId(trace?.workflowTraceId) }), workflow = await db.collection("workflows").findOne({
    _id: new import_mongodb7.ObjectId(workflowTraceObject?.workflowId)
  }), argument = workflow?.design?.flow?.find((obj) => obj.seq === trace?.seq)?.credentials, prevTrace = await db.collection("trace").findOne({
    workflowTraceId: new import_mongodb7.ObjectId(trace?.workflowTraceId),
    seq: trace?.seq - 1
  }), apiResponse = await fetch(argument?.apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(prevTrace?.response)
  });
  try {
    let data3 = await apiResponse.json();
    switch (await db.collection("outboundRequestLogs").insertOne({
      headers: {
        "Content-Type": "application/json"
      },
      request: prevTrace?.response,
      response: data3,
      url: argument?.apiEndpoint,
      workflowId: new import_mongodb7.ObjectId(workflow?._id)
    }), subFn) {
      case "updateOrderNumber":
        return console.log(`Trace ID: ${_id} || Starting updateOrderNumber Process`), response2 = await updateOrderNumber_default(workflowTraceObject?._id, companyDb, data3), console.log(`Trace ID: ${_id} || updateOrderNumber Process Completed`), console.log(`Trace ID: ${_id} || Outbound Process Completed`), response2;
      default:
        return {
          success: !0,
          message: "Invalid Sub Function",
          data: null
        };
    }
  } catch (err) {
    return console.log(err), await db.collection("outboundRequestLogs").insertOne({
      headers: {
        "Content-Type": "application/json"
      },
      request: prevTrace?.response,
      response: err,
      url: argument?.apiEndpoint,
      workflowId: new import_mongodb7.ObjectId(workflow?._id)
    }), {
      success: !1,
      message: "Something went wrong while processing the Outbound request",
      data: null
    };
  }
}, outbound_default = outbound;

// app/utils/pipeline/processing/index.tsx
var import_mongodb8 = require("mongodb");

// app/utils/pipeline/processing/customFunction/jsonTojsonConverter.tsx
var jsonTojsonConverter = async (argument, mapper) => {
  let response2 = {
    success: !1,
    message: "Function not started",
    data: null
  }, outputJson = null;
  try {
    if (Array.isArray(argument) && (outputJson = await convertJsons(argument, mapper, [])), typeof argument == "object" && argument !== null) {
      let arr = [];
      arr.push(argument), outputJson = await convertJsons(arr, mapper, []);
    }
    return response2 = {
      success: !0,
      message: "Data Converted",
      data: outputJson?.[0]
    }, response2;
  } catch (err) {
    return console.error(err), response2 = {
      success: !1,
      message: "Unable to convert the JSON payload",
      data: null
    }, response2;
  }
}, jsonTojsonConverter_default = jsonTojsonConverter;

// app/utils/pipeline/processing/index.tsx
var processing = async (_id, companyDb, subFn) => {
  console.log(`Trace ID: ${_id} || Starting Data Processing`);
  let response2 = {
    success: !1,
    message: "Not Started",
    data: null
  };
  try {
    let db = mongodb.db(companyDb), trace = await db.collection("trace").findOne({
      _id: new import_mongodb8.ObjectId(_id)
    }), prevTrace = await db.collection("trace").findOne({
      workflowTraceId: new import_mongodb8.ObjectId(trace?.workflowTraceId),
      seq: trace?.seq - 1
    });
    if (!trace)
      return console.log(`Trace ID : ${_id} || not found`), {
        success: !1,
        message: "Trace ID not found"
      };
    if (!subFn)
      return console.log(`Trace ID : ${_id} || Sub Function Not found`), {
        success: !1,
        message: "Trace ID not found"
      };
    switch (subFn) {
      case "jsonToJsonConverter":
        console.log(`Trace ID : ${_id} || jsonToJsonConverter Started`);
        let workflowTrace = await db.collection("workflowTrace").findOne({
          _id: new import_mongodb8.ObjectId(trace?.workflowTraceId)
        }), mappingPayload = (await db.collection("workflows").findOne({
          _id: new import_mongodb8.ObjectId(workflowTrace?.workflowId)
        }))?.design?.flow?.find((obj) => obj.seq === trace?.seq)?.mappingPayload;
        return response2 = await jsonTojsonConverter_default(prevTrace?.response, mappingPayload), console.log(`Trace ID : ${_id} || jsonToJsonConverter Returned`), response2;
      default:
        response2 = {
          success: !0,
          message: "Invalid Sub Function",
          data: null
        };
    }
    return console.log(`Trace ID: ${_id} || Data Processing Completed`), response2;
  } catch (err) {
    return console.error(err), console.log(`Trace ID: ${_id} || Starting Data Processing`), response2 = {
      success: !1,
      message: err?.message,
      data: null
    }, response2;
  }
}, processing_default = processing;

// app/utils/pipeline/initiateTrace.tsx
var functionMapper = async (traceId, trace, companyDb) => {
  switch (trace?.fn) {
    case "inbound":
      return await inbound_default(traceId, companyDb, trace?.subFn);
    case "processing":
      return await processing_default(traceId, companyDb, trace?.subFn);
    case "outbound":
      return await outbound_default(traceId, companyDb, trace?.subFn);
    default:
      return {
        success: !1,
        message: `${trace?.fn} not found`,
        data: null
      };
  }
}, initiateTrace = async (setBreak, workflowTrace, flow, companyDb, status2, argument) => {
  let db = mongodb.db(companyDb), trace = {
    status: status2,
    workflowTraceId: new import_mongodb9.ObjectId(workflowTrace.insertedId),
    fn: flow?.fn,
    subFn: flow?.subFn,
    argument,
    seq: flow?.seq,
    response: null,
    createdAt: /* @__PURE__ */ new Date()
  }, traceObject = await db.collection("trace").insertOne(trace);
  if (!setBreak) {
    let { success, message, data: data3 } = await functionMapper(traceObject.insertedId, trace, companyDb);
    await db.collection("trace").updateOne(
      {
        _id: new import_mongodb9.ObjectId(traceObject?.insertedId)
      },
      {
        $set: {
          response: data3,
          success,
          status: message,
          executedAt: /* @__PURE__ */ new Date()
        }
      }
    ), setBreak = !success;
  }
  return setBreak;
}, initiateTrace_default = initiateTrace;

// app/utils/pipeline/initiateWorkflow.tsx
var initiateWorkflow = async (request, workflow, companyDb) => {
  let workflowTrace = await mongodb.db(companyDb).collection("workflowTrace").insertOne({
    workflowId: new import_mongodb10.ObjectId(workflow?._id),
    createdAt: /* @__PURE__ */ new Date()
  }), setBreak = !1;
  for (let [index, flow] of workflow.design.flow.entries())
    index === 0 ? setBreak = await initiateTrace_default(setBreak, workflowTrace, flow, companyDb, "In Progress", request) : setBreak = await initiateTrace_default(setBreak, workflowTrace, flow, companyDb, setBreak ? "Pending" : "Starting");
}, initiateWorkflow_default = initiateWorkflow;

// app/routes/api.ext.post.$customerId.$workflowId.tsx
var action4 = async ({ request, params }) => {
  let data3 = await request.json(), headers = request.headers, url = request.url, customerId = params?.customerId, workflowId = params?.workflowId, db = mongodb.db(customerId), workflow = await db.collection("workflows").findOne({
    customerId: new import_mongodb11.ObjectId(customerId),
    _id: new import_mongodb11.ObjectId(workflowId)
  }), inboundRequestLogData = {
    request: data3,
    headers,
    response: null,
    url,
    customerId: new import_mongodb11.ObjectId(customerId),
    workflowId: new import_mongodb11.ObjectId(workflowId),
    createdAt: /* @__PURE__ */ new Date(),
    status: null
  };
  if (!workflow)
    return await db.collection("inboundRequestLogs").insertOne({
      ...inboundRequestLogData,
      status: 400,
      response: {
        success: !1,
        message: "Workflow not found"
      }
    }), (0, import_node5.json)({
      success: !1,
      error: "Workflow not found"
    }, { status: 400 });
  if (headers.get("Authorization") != workflow?.authentication)
    return (0, import_node5.json)({
      success: !1,
      error: "Unauthorized"
    }, { status: 401 });
  try {
    initiateWorkflow_default(data3, workflow, customerId);
  } catch (err) {
    return console.error(err), await db.collection("inboundRequestLogs").insertOne({
      ...inboundRequestLogData,
      status: 500,
      response: {
        success: !1,
        message: "Workflow Initialization Failed"
      }
    }), (0, import_node5.json)({
      success: !1,
      message: "Workflow Initialization Failed"
    }, { status: 500 });
  }
  return await db.collection("inboundRequestLogs").insertOne({
    ...inboundRequestLogData,
    status: 200,
    response: {
      success: !1,
      message: "Workflow Initiated"
    }
  }), (0, import_node5.json)({ success: !0, message: "Workflow Initiated" }, { status: 200 });
};

// app/routes/user.workflows.list.$id.edit.$formNo.tsx
var user_workflows_list_id_edit_formNo_exports = {};
__export(user_workflows_list_id_edit_formNo_exports, {
  default: () => CustomerWorkflowAdd2,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node"), import_react28 = require("@remix-run/react");

// app/components/customers/forms/CustomerWorkflowBasicForm.tsx
var import_react27 = require("@remix-run/react"), import_Typography7 = __toESM(require("@mui/material/Typography")), import_Grid7 = __toESM(require("@mui/material/Grid"));

// app/components/Form/FormTitleWithBackButton.tsx
var import_Typography6 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime30 = require("react/jsx-runtime"), FormTitleWithBackButton = ({
  editMode,
  title,
  sx
}) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    import_Typography6.default,
    {
      style: { marginTop: "0.2rem" },
      align: "center",
      variant: "h6",
      gutterBottom: !0,
      sx: { ...sx },
      children: [
        editMode ? "Edit" : "Add",
        " ",
        title
      ]
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(BackButton_default, {})
] }), FormTitleWithBackButton_default = FormTitleWithBackButton;

// app/components/Form/FormFields/MultiSelectField.tsx
var import_FormControl = __toESM(require("@mui/material/FormControl")), import_InputLabel = __toESM(require("@mui/material/InputLabel")), import_Select2 = __toESM(require("@mui/material/Select")), import_MenuItem = __toESM(require("@mui/material/MenuItem")), import_react_hook_form5 = require("react-hook-form"), import_jsx_runtime31 = require("react/jsx-runtime"), MultiSelectField = ({
  fieldName,
  label,
  itemList,
  defaultValue = [],
  control
}) => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_FormControl.default, { variant: "outlined", fullWidth: !0, children: [
  /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_InputLabel.default, { children: label }),
  /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    import_react_hook_form5.Controller,
    {
      name: fieldName,
      control,
      defaultValue,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        import_Select2.default,
        {
          defaultValue,
          multiple: !0,
          label,
          size: "small",
          ...field,
          children: itemList?.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_MenuItem.default, { value: item.value, children: item.label }, index))
        }
      )
    }
  )
] }), MultiSelectField_default = MultiSelectField;

// app/components/Form/FormFields/DropDownInput.tsx
var import_MenuItem2 = __toESM(require("@mui/material/MenuItem")), import_TextField5 = __toESM(require("@mui/material/TextField")), import_jsx_runtime32 = require("react/jsx-runtime"), ITEM_HEIGHT = 80, ITEM_PADDING_TOP = 8, SelectProps = {
  MenuProps: {
    style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250 }
  }
}, DropDownInput = ({
  fieldName,
  label,
  itemList,
  defaultValue,
  register,
  required = !0
}) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
  import_TextField5.default,
  {
    ...register(fieldName),
    select: !0,
    fullWidth: !0,
    size: "small",
    label,
    SelectProps,
    defaultValue,
    required,
    children: itemList?.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_MenuItem2.default, { value: item?.value, children: item?.name }, item?.value))
  }
), DropDownInput_default = DropDownInput;

// app/components/customers/forms/CustomerWorkflowBasicForm.tsx
var import_jsx_runtime33 = require("react/jsx-runtime"), CustomerWorkflowFormFields = ({
  methods,
  defaultValues
}) => {
  let { register, control } = methods;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_Grid7.default, { container: !0, spacing: 1, style: { alignItems: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Typography7.default, { children: "Code" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "code",
        label: "Code",
        required: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Typography7.default, { children: "Name" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "name",
        label: "Name",
        required: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Typography7.default, { children: "Description" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "description",
        label: "Description",
        required: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Typography7.default, { children: "Customer" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      DropDownInput_default,
      {
        fieldName: "customer",
        label: "Customer",
        itemList: [],
        defaultValue: defaultValues?.customer,
        register,
        required: !1
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Typography7.default, { children: "Type" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      DropDownInput_default,
      {
        fieldName: "type",
        label: "Type",
        itemList: [],
        defaultValue: defaultValues?.type,
        register,
        required: !1
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Typography7.default, { children: "Tags" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      MultiSelectField_default,
      {
        fieldName: "tags",
        label: "Tags",
        defaultValue: defaultValues?.tags,
        control,
        itemList: []
      }
    ) })
  ] });
}, CustomerWorkflowBasicForm = ({
  methods,
  defaultValues,
  editMode = !1
}) => {
  let navigate = (0, import_react27.useNavigate)(), { handleSubmit } = methods;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("form", { onSubmit: handleSubmit(() => {
    navigate("../2/design");
  }), children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { container: !0, spacing: 2, marginTop: 1, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_Grid7.default, { item: !0, xs: 8, children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        FormTitleWithBackButton_default,
        {
          title: "Workflow",
          editMode
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_Grid7.default, { container: !0, alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        CustomerWorkflowFormFields,
        {
          methods,
          defaultValues
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SubmitOrSave_default, { name: "Next" })
  ] });
}, CustomerWorkflowBasicForm_default = CustomerWorkflowBasicForm;

// app/routes/user.workflows.list.$id.edit.$formNo.tsx
var import_material10 = require("@mui/material"), import_jsx_runtime34 = require("react/jsx-runtime"), loader3 = async ({ request, params }) => {
  let { id, formNo } = params;
  return [1, 2].includes(Number(formNo)) ? (0, import_node6.json)({}) : (0, import_node6.redirect)(`/user/workflows/list/${id}/edit/1`);
};
function CustomerWorkflowAdd2() {
  let { formNo } = (0, import_react28.useParams)(), { methods } = useParentData();
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_material10.Box, { children: [
    Number(formNo) === 1 && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CustomerWorkflowBasicForm_default, { methods, defaultValues: null }),
    Number(formNo) === 2 && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CustomerWorkflowDesignForm, { methods, defaultValues: null })
  ] }, formNo);
}

// app/routes/user.user-management.users.$id.edit.tsx
var user_user_management_users_id_edit_exports = {};
__export(user_user_management_users_id_edit_exports, {
  action: () => action5,
  default: () => EditUserFormIndex,
  loader: () => loader4
});

// app/components/customers/forms/UserForm/index.tsx
var import_Grid9 = __toESM(require("@mui/material/Grid"));

// app/components/customers/forms/UserForm/UserFormFields.tsx
var import_Typography8 = __toESM(require("@mui/material/Typography")), import_Grid8 = __toESM(require("@mui/material/Grid")), import_Checkbox = __toESM(require("@mui/material/Checkbox")), import_Stack = __toESM(require("@mui/material/Stack")), import_Table = __toESM(require("@mui/material/Table")), import_TableBody = __toESM(require("@mui/material/TableBody")), import_TableCell = __toESM(require("@mui/material/TableCell")), import_TableHead = __toESM(require("@mui/material/TableHead")), import_TableRow = __toESM(require("@mui/material/TableRow"));
var import_react_hook_form6 = require("react-hook-form");

// app/data/moduleList.ts
var import_Dashboard = __toESM(require("@mui/icons-material/Dashboard")), import_Settings = __toESM(require("@mui/icons-material/Settings")), import_Hub = __toESM(require("@mui/icons-material/Hub")), import_SignalCellularAlt = __toESM(require("@mui/icons-material/SignalCellularAlt")), import_ShareLocation = __toESM(require("@mui/icons-material/ShareLocation")), import_ViewList = __toESM(require("@mui/icons-material/ViewList")), import_Business = __toESM(require("@mui/icons-material/Business")), import_People = __toESM(require("@mui/icons-material/People")), import_ContactSupport = __toESM(require("@mui/icons-material/ContactSupport")), moduleList = [
  {
    sectionName: "Dashboard",
    icon: import_Dashboard.default,
    path: "dashboard"
  },
  {
    sectionName: "Workflows",
    icon: import_Settings.default,
    path: "workflows"
  },
  {
    sectionName: "Traces",
    icon: import_Hub.default,
    path: "traces"
  },
  {
    sectionName: "Fero Analytics",
    icon: import_SignalCellularAlt.default,
    path: "analytics"
  },
  {
    sectionName: "Track And Trace",
    icon: import_ShareLocation.default,
    path: "track-trace"
  },
  {
    sectionName: "Orders",
    icon: import_ViewList.default,
    path: "orders"
  },
  {
    sectionName: "Customers",
    icon: import_Business.default,
    path: "customers"
  },
  {
    sectionName: "User Management",
    icon: import_People.default,
    path: "user-management"
  },
  {
    sectionName: "Support",
    icon: import_ContactSupport.default,
    path: "support"
  }
], moduleList_default = moduleList;

// app/components/customers/forms/UserForm/UserFormFields.tsx
var import_jsx_runtime35 = require("react/jsx-runtime"), UserFormFields = ({ defaultValues, editMode, isAdmin }) => {
  let { register, watch, getValues } = (0, import_react_hook_form6.useForm)({
    defaultValues
  }), isAdminChecked = watch("isAdmin");
  return console.log(watch()), /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_Grid8.default, { container: !0, spacing: 1, style: { alignItems: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_Grid8.default, { item: !0, xs: 12, sm: 6, children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Typography8.default, { children: "User Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        import_Typography8.default,
        {
          style: {
            fontSize: "11.5px"
          },
          children: "Enter the name of the user."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Grid8.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "name",
        label: "User Name",
        required: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_Grid8.default, { item: !0, xs: 12, sm: 6, children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Typography8.default, { children: "Email" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        import_Typography8.default,
        {
          style: {
            fontSize: "11.5px"
          },
          children: "Enter the email of the user."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Grid8.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "email",
        label: "Email",
        required: !0,
        props: {
          type: "email"
        }
      }
    ) }),
    !editMode && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_Grid8.default, { item: !0, xs: 12, sm: 6, children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Typography8.default, { children: "Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          import_Typography8.default,
          {
            style: {
              fontSize: "11.5px"
            },
            children: "Enter the password of the user."
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Grid8.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        SimpleTextField_default,
        {
          register,
          fieldName: "password",
          label: "Password",
          props: { type: "password" },
          required: !0
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_Grid8.default, { item: !0, xs: 12, sm: 6, children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Typography8.default, { children: "Re-enter Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          import_Typography8.default,
          {
            style: {
              fontSize: "11.5px"
            },
            children: "Re-enter the password of the user."
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Grid8.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        SimpleTextField_default,
        {
          register,
          fieldName: "rePassword",
          label: "Re-enter Password",
          props: { type: "password" },
          required: !0
        }
      ) })
    ] }),
    isAdmin && !editMode && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_Grid8.default, { item: !0, xs: 12, sm: 6, children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Typography8.default, { children: "is Admin?" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          import_Typography8.default,
          {
            style: {
              fontSize: "11.5px"
            },
            children: "should user have all privileges?"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Grid8.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        import_Checkbox.default,
        {
          size: "small",
          name: "isAdmin",
          checked: !!watch("isAdmin"),
          inputProps: {
            ...register("isAdmin")
          },
          style: {
            paddingTop: "0",
            paddingBottom: "0",
            fontSize: "0.8rem"
          }
        }
      ) })
    ] }),
    !isAdminChecked && !editMode && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_Grid8.default, { item: !0, xs: 12, sm: 6, sx: { mt: 1 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Typography8.default, { children: "Module Permissions" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          import_Typography8.default,
          {
            style: {
              fontSize: "11.5px"
            },
            children: "Select the permissions for the user."
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Grid8.default, { item: !0, xs: 12, sm: 6, sx: { mt: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_Stack.default, { sx: { maxHeight: 500, overflowY: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_Table.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_TableHead.default, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_TableRow.default, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_TableCell.default, { sx: cellStyle, children: "Module" }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_TableCell.default, { sx: cellStyle, children: "Read" }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_TableCell.default, { sx: cellStyle, children: "Write" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_TableBody.default, { children: moduleList_default.map((module2, index) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_TableRow.default, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_TableCell.default, { sx: cellStyle, children: [
            index + 1,
            ". ",
            module2.sectionName
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_TableCell.default, { sx: cellStyle, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            import_Checkbox.default,
            {
              ...register(`permissions.${index}.read`)
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_TableCell.default, { sx: cellStyle, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            import_Checkbox.default,
            {
              ...register(`permissions.${index}.write`)
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            "input",
            {
              type: "hidden",
              ...register(`permissions.${index}.module`),
              name: `permissions.${index}.module`,
              value: module2.path
            }
          )
        ] }, index)) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "input",
      {
        type: "hidden",
        name: "permissions",
        value: JSON.stringify(getValues("permissions"))
      }
    )
  ] });
}, UserFormFields_default = UserFormFields, cellStyle = {
  borderBottom: "none",
  px: 1,
  py: "4px"
};

// app/components/customers/forms/UserForm/index.tsx
var import_react29 = require("@remix-run/react"), import_jsx_runtime36 = require("react/jsx-runtime"), UserForm = ({
  defaultValues,
  editMode = !1,
  isAdmin
}) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react29.Form, { method: "POST", children: [
  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_Grid9.default, { container: !0, spacing: 2, marginTop: 1, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_Grid9.default, { item: !0, xs: 8, children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      FormTitleWithBackButton_default,
      {
        title: "User",
        editMode
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_Grid9.default, { container: !0, alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      UserFormFields_default,
      {
        editMode,
        defaultValues,
        isAdmin
      }
    ) })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(SubmitOrSave_default, {})
] }), UserForm_default = UserForm;

// app/routes/user.user-management.users.$id.edit.tsx
var import_node7 = require("@remix-run/node");
var import_react30 = require("@remix-run/react");

// app/models/users/getUserById.ts
async function getUserById2(id) {
  return await (await adminDb_server_default).db(process.env.MONGODB_SAAS_ADMIN_DB).collection("saasUsers").findOne({ _id: new ObjectId(id) });
}

// app/models/users/updateUserPromise.ts
async function updateUserPromise(id, name, email) {
  return (await adminDb_server_default).db(process.env.MONGODB_SAAS_ADMIN_DB).collection("saasUsers").updateOne({
    _id: new ObjectId(id)
  }, {
    $set: {
      name,
      email
    }
  });
}

// app/routes/user.user-management.users.$id.edit.tsx
var import_jsx_runtime37 = require("react/jsx-runtime"), loader4 = async ({ request, params }) => {
  let isAdmin = await getIsUserAdmin(request), user = await getUserById2(params.id);
  return (0, import_node7.json)({ isAdmin, user });
}, action5 = async ({ request, params }) => {
  try {
    let formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries()), updatedUser = await updateUserPromise(
      params.id,
      rawDocument?.name,
      rawDocument?.email
    );
    if (console.log(updatedUser), updatedUser.acknowledged)
      return (0, import_node7.redirect)("../permissions");
    throw new Error("Failed to update user");
  } catch (error) {
    return console.error(error), (0, import_node7.json)(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
function EditUserFormIndex() {
  let { isAdmin, user } = (0, import_react30.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(UserForm_default, { defaultValues: user, isAdmin, editMode: !0 });
}

// app/routes/user.traces.$id.$functionid._index.tsx
var user_traces_id_functionid_index_exports = {};
__export(user_traces_id_functionid_index_exports, {
  default: () => CustomerFunctionView
});
var import_react31 = require("@remix-run/react");

// app/components/customers/traces/FunctionViews/Inbound/APIEndPointView.tsx
var import_Box6 = __toESM(require("@mui/material/Box")), import_Divider2 = __toESM(require("@mui/material/Divider")), import_Table2 = __toESM(require("@mui/material/Table")), import_TableBody2 = __toESM(require("@mui/material/TableBody")), import_TableCell2 = __toESM(require("@mui/material/TableCell")), import_TableRow2 = __toESM(require("@mui/material/TableRow")), import_Typography9 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime38 = require("react/jsx-runtime");
function APIEndPointView({ payload: payload2 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_Box6.default, { sx: { py: 3 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_Box6.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_Typography9.default, { variant: "h5", color: "initial", children: "Process" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_Divider2.default, { sx: { border: 1 } })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_Table2.default, { sx: { width: "50%", mt: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableBody2.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableRow2.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: keyCellStyle, children: "Process ID" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: cellStyle2, children: ": PROCESS0001" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableRow2.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: keyCellStyle, children: "Process Name" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: cellStyle2, children: ": PROCESS_NAME" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableRow2.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: keyCellStyle, children: "Initiate Time" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableCell2.default, { sx: cellStyle2, children: [
          ": ",
          (/* @__PURE__ */ new Date()).toISOString()
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableRow2.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: keyCellStyle, children: "Completed Time" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableCell2.default, { sx: cellStyle2, children: [
          ": ",
          (/* @__PURE__ */ new Date()).toISOString()
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableRow2.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: keyCellStyle, children: "Status" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: cellStyle2, children: ": Completed" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableRow2.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: keyCellStyle, children: "Result" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: cellStyle2, children: ": null" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableRow2.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: keyCellStyle, children: "Error" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: cellStyle2, children: ": null" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableRow2.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: keyCellStyle, children: "End Point" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: cellStyle2, children: ": http://127.0.0.1/some-path/ekkd0393/" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_TableRow2.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: keyCellStyle, children: "Method" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_TableCell2.default, { sx: cellStyle2, children: ": POST" })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_Box6.default, { sx: { px: 2, mt: 2 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_Typography9.default, { variant: "body1", sx: { color: "gray", py: 1, fontWeight: 500, fontSize: 18 }, children: "Payload" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_Box6.default, { sx: { border: 1, p: 2, height: 600, overflowY: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        ReactJsonViewer,
        {
          name: "request",
          src: payload2,
          fallback: "Loading..."
        }
      ) })
    ] })
  ] }) });
}
var APIEndPointView_default = APIEndPointView, keyCellStyle = {
  width: 200,
  border: "none",
  py: "10px",
  fontSize: 16,
  color: "gray",
  fontWeight: 500
}, cellStyle2 = {
  border: "none",
  py: "10px",
  fontSize: 16,
  color: "#393939"
};

// app/components/customers/traces/FunctionViews/OutBound/APICallerView.tsx
var import_Box7 = __toESM(require("@mui/material/Box")), import_Divider3 = __toESM(require("@mui/material/Divider")), import_Table3 = __toESM(require("@mui/material/Table")), import_TableBody3 = __toESM(require("@mui/material/TableBody")), import_TableCell3 = __toESM(require("@mui/material/TableCell")), import_TableRow3 = __toESM(require("@mui/material/TableRow")), import_Typography10 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime39 = require("react/jsx-runtime"), APIcallerView = ({ payload: payload2, response: response2 }) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_jsx_runtime39.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_Box7.default, { sx: { py: 3 }, children: [
  /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_Box7.default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_Typography10.default, { variant: "h5", color: "initial", children: "Process" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_Divider3.default, { sx: { border: 1 } })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_Table3.default, { sx: { width: "50%", mt: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_TableBody3.default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_TableRow3.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: keyCellStyle2, children: "Process ID" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: cellStyle3, children: ": PROCESS0001" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_TableRow3.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: keyCellStyle2, children: "Process Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: cellStyle3, children: ": PROCESS_NAME" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_TableRow3.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: keyCellStyle2, children: "Initiate Time" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_TableCell3.default, { sx: cellStyle3, children: [
        ": ",
        (/* @__PURE__ */ new Date()).toISOString()
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_TableRow3.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: keyCellStyle2, children: "Completed Time" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_TableCell3.default, { sx: cellStyle3, children: [
        ": ",
        (/* @__PURE__ */ new Date()).toISOString()
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_TableRow3.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: keyCellStyle2, children: "Status" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: cellStyle3, children: ": Completed" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_TableRow3.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: keyCellStyle2, children: "Result" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: cellStyle3, children: ": null" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_TableRow3.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: keyCellStyle2, children: "Error" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_TableCell3.default, { sx: cellStyle3, children: ": null" })
    ] })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_Box7.default, { sx: { display: "flex", width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_Box7.default, { sx: { px: 2, mt: 2, width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_Typography10.default, { variant: "body1", sx: { color: "gray", py: 1, fontWeight: 500, fontSize: 18 }, children: "Request Payload" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_Box7.default, { sx: { border: 1, p: 2, height: 600, overflowY: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_Typography10.default, { variant: "body1", sx: {}, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        ReactJsonViewer,
        {
          name: "request",
          src: payload2,
          fallback: "Loading..."
        }
      ) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_Box7.default, { sx: { px: 2, mt: 2, width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_Typography10.default, { variant: "body1", sx: { color: "gray", py: 1, fontWeight: 500, fontSize: 18 }, children: "Response" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_Box7.default, { sx: { border: 1, p: 2, height: 600, overflowY: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_Typography10.default, { variant: "body1", sx: {}, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        ReactJsonViewer,
        {
          name: "response",
          src: response2,
          fallback: "Loading..."
        }
      ) }) })
    ] })
  ] })
] }) }), APICallerView_default = APIcallerView, keyCellStyle2 = {
  width: 200,
  border: "none",
  py: "10px",
  fontSize: 16,
  color: "gray",
  fontWeight: 500
}, cellStyle3 = {
  border: "none",
  py: "10px",
  fontSize: 16,
  color: "#393939"
};

// app/components/customers/traces/FunctionViews/Proccesses/JsonToJsonConverterView.tsx
var import_Box8 = __toESM(require("@mui/material/Box")), import_Divider4 = __toESM(require("@mui/material/Divider")), import_Table4 = __toESM(require("@mui/material/Table")), import_TableBody4 = __toESM(require("@mui/material/TableBody")), import_TableCell4 = __toESM(require("@mui/material/TableCell")), import_TableRow4 = __toESM(require("@mui/material/TableRow")), import_Typography11 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime40 = require("react/jsx-runtime"), JsonToJsonConverterView = ({ input, output }) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_jsx_runtime40.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_Box8.default, { sx: { py: 3 }, children: [
  /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_Box8.default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_Typography11.default, { variant: "h5", color: "initial", children: "Process" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_Divider4.default, { sx: { border: 1 } })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_Table4.default, { sx: { width: "50%", mt: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_TableBody4.default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_TableRow4.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: keyCellStyle3, children: "Process ID" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: cellStyle4, children: ": PROCESS0001" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_TableRow4.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: keyCellStyle3, children: "Process Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: cellStyle4, children: ": PROCESS_NAME" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_TableRow4.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: keyCellStyle3, children: "Initiate Time" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_TableCell4.default, { sx: cellStyle4, children: [
        ": ",
        (/* @__PURE__ */ new Date()).toISOString()
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_TableRow4.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: keyCellStyle3, children: "Completed Time" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_TableCell4.default, { sx: cellStyle4, children: [
        ": ",
        (/* @__PURE__ */ new Date()).toISOString()
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_TableRow4.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: keyCellStyle3, children: "Status" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: cellStyle4, children: ": Completed" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_TableRow4.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: keyCellStyle3, children: "Result" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: cellStyle4, children: ": null" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_TableRow4.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: keyCellStyle3, children: "Error" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TableCell4.default, { sx: cellStyle4, children: ": null" })
    ] })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_Box8.default, { sx: { display: "flex", width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_Box8.default, { sx: { px: 2, mt: 2, width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_Typography11.default, { variant: "body1", sx: { color: "gray", py: 1, fontWeight: 500, fontSize: 18 }, children: "Input" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_Box8.default, { sx: { border: 1, p: 2, height: 600, overflowY: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_Typography11.default, { variant: "body1", sx: {}, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        ReactJsonViewer,
        {
          name: "input",
          src: input,
          fallback: "Loading..."
        }
      ) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_Box8.default, { sx: { px: 2, mt: 2, width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_Typography11.default, { variant: "body1", sx: { color: "gray", py: 1, fontWeight: 500, fontSize: 18 }, children: "Output" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_Box8.default, { sx: { border: 1, p: 2, height: 600, overflowY: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_Typography11.default, { variant: "body1", sx: {}, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        ReactJsonViewer,
        {
          name: "output",
          src: output,
          fallback: "Loading..."
        }
      ) }) })
    ] })
  ] })
] }) }), JsonToJsonConverterView_default = JsonToJsonConverterView, keyCellStyle3 = {
  width: 200,
  border: "none",
  py: "10px",
  fontSize: 16,
  color: "gray",
  fontWeight: 500
}, cellStyle4 = {
  border: "none",
  py: "10px",
  fontSize: 16,
  color: "#393939"
};

// app/routes/user.traces.$id.$functionid._index.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
function CustomerFunctionView() {
  let { functionid } = (0, import_react31.useParams)();
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_jsx_runtime41.Fragment, { children: functionid === "FUN0001" ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(APIEndPointView_default, { payload }) : functionid === "FUN0002" ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(JsonToJsonConverterView_default, { input: payload, output: payload }) : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(APICallerView_default, { payload, response }) });
}
var payload = [
  {
    entity_type: "FORWARD",
    merchant: "MERCHANT-ID",
    references: {
      partner_order_reference: "new-shipment-1",
      partner_shipment_reference: "new-shipment-1"
    },
    payment: {
      payment_mode: "PRE_PAID",
      total_amount: 100,
      currency: "USD"
    },
    parcels: [
      {
        partner_parcel_reference: "parcel-123",
        weight: {
          value: 1,
          unit: "kg"
        },
        dimension: {
          width: 20,
          height: 40,
          depth: 40,
          unit: "cm"
        }
      },
      {
        partner_parcel_reference: "parcel-124",
        weight: {
          value: 0.5,
          unit: "kg"
        },
        dimension: {
          width: 30,
          height: 50,
          depth: 50,
          unit: "cm"
        }
      }
    ],
    items: [
      {
        description: "Most Adorable Sneakers",
        quantity: 1,
        price: {
          amount: 80,
          currency: "USD"
        },
        weight: {
          value: 1,
          unit: "kg"
        },
        sku: "10001"
      },
      {
        description: "Absolutely Lovely Hat",
        quantity: 1,
        price: {
          amount: 20,
          currency: "USD"
        },
        cost: {
          amount: 20,
          currency: "USD"
        },
        weight: {
          value: 0.5,
          unit: "kg"
        },
        sku: "10001"
      }
    ],
    customs: {
      declared_value: {
        amount: 100,
        currency: "USD"
      }
    },
    pickup: {
      contact_name: "Warehouse Manager",
      contact_phone: "043872701",
      contact_email: "ops@test.com",
      address1: "Grand Central Warehouse",
      city: "Dubai",
      state: "Dubai",
      postcode: "",
      country: "AE"
    },
    dropoff: {
      contact_name: "Jo Bloggs",
      contact_phone: "0561111234",
      contact_email: "jo@test.com",
      address1: "1, 10th Floor, Tower One",
      address2: "Dubai Marina",
      city: "DUBAI",
      what3words: "///daring.lion.race",
      postcode: "",
      country: "AE"
    },
    order_date: "2021-01-01T10:00:00.999+1:00"
  }
], response = {
  status: 200,
  message: "successfully trip created"
};

// app/routes/user.user-management.groups._index.tsx
var user_user_management_groups_index_exports = {};
__export(user_user_management_groups_index_exports, {
  default: () => CustomersTagsIndex,
  loader: () => loader5
});

// app/components/AdvancedTable/AdvancedTable.tsx
var import_react33 = require("react"), import_Paper = __toESM(require("@mui/material/Paper")), import_react_table = require("react-table"), import_TableContainer = __toESM(require("@mui/material/TableContainer"));

// app/components/AdvancedTable/DataTable.tsx
var import_Table5 = __toESM(require("@mui/material/Table")), import_TableRow6 = __toESM(require("@mui/material/TableRow")), import_TableBody6 = __toESM(require("@mui/material/TableBody")), import_TableCell6 = __toESM(require("@mui/material/TableCell")), import_TableHead2 = __toESM(require("@mui/material/TableHead")), import_Typography13 = __toESM(require("@mui/material/Typography")), import_TableSortLabel = __toESM(require("@mui/material/TableSortLabel"));

// app/components/AdvancedTable/TableLoader.tsx
var import_TableRow5 = __toESM(require("@mui/material/TableRow")), import_TableBody5 = __toESM(require("@mui/material/TableBody")), import_TableCell5 = __toESM(require("@mui/material/TableCell")), import_Typography12 = __toESM(require("@mui/material/Typography")), import_CircularProgress = __toESM(require("@mui/material/CircularProgress")), import_jsx_runtime42 = require("react/jsx-runtime"), TableLoader = ({ colSpan, spinner, displayText }) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_TableBody5.default, { sx: tableStyle, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_TableRow5.default, { sx: bodyRowStyle, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_TableCell5.default, { colSpan, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
  import_Typography12.default,
  {
    sx: {
      display: "flex",
      fontSize: "14px",
      fontStyle: "italic",
      alignItems: "center",
      color: "text.primary",
      justifyContent: "center",
      fontFamily: "IBM Plex Sans, Regular"
    },
    children: [
      spinner && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_CircularProgress.default, { size: 15 }),
      "\u2002",
      displayText
    ]
  }
) }) }) }), tableStyle = {
  "&:last-child td, &:last-child th": { border: "0 px solid #636161" },
  // round corners
  borderRadius: "5px 5px 5px 5px"
}, bodyRowStyle = { "&:hover": { backgroundColor: "background.light" } }, TableLoader_default = TableLoader;

// app/utils/icons/TagsIcon.jsx
var import_utils = require("@mui/material/utils"), import_jsx_runtime43 = require("react/jsx-runtime"), TagsIcon = (0, import_utils.createSvgIcon)(
  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"
    }
  ),
  "TagIcon"
), TagsIcon_default = TagsIcon;

// app/utils/icons/AddTagIcon.jsx
var import_utils2 = require("@mui/material/utils"), import_jsx_runtime44 = require("react/jsx-runtime"), AddTagIcon = (0, import_utils2.createSvgIcon)(
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M21.41,11.58L12.41,2.58C12.04,2.21 11.53,2 11,2H4A2,2 0 0,0 2,4V11C2,11.53 2.21,12.04 2.59,12.41L3,12.81C3.9,12.27 4.94,12 6,12A6,6 0 0,1 12,18C12,19.06 11.72,20.09 11.18,21L11.58,21.4C11.95,21.78 12.47,22 13,22C13.53,22 14.04,21.79 14.41,21.41L21.41,14.41C21.79,14.04 22,13.53 22,13C22,12.47 21.79,11.96 21.41,11.58M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M10,19H7V22H5V19H2V17H5V14H7V17H10V19Z"
    }
  ),
  "AddTagIcon"
), AddTagIcon_default = AddTagIcon;

// app/components/AdvancedTable/DataTable.tsx
var import_jsx_runtime45 = require("react/jsx-runtime"), DataTable = ({
  page,
  data: data3,
  isLoading,
  enableTags,
  customRows,
  prepareRow,
  onCellClick,
  headerGroups,
  globalFilter,
  getTableProps,
  disableSorting,
  actionButtonList
}) => {
  let showActionButtons = enableTags?.onTagClick || actionButtonList?.length > 0, colSpan = headerGroups[0]?.headers?.length + (showActionButtons ? 1 : 0), handleCellClick = (cellValue, colIndex) => onCellClick && onCellClick(cellValue, colIndex), ActionHeader = () => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_TableCell6.default, { sx: { p: "0 12px", textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_Typography13.default, { sx: headerCellStyle, children: "Actions" }) }), ActionButtons = ({ row }) => {
    let isTagbuttonDisabled = row?.original?.actionButtonDisabled?.includes("tags"), isTagButtonInvisible = row?.original?.actionButtonInvisible?.includes("tags");
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_TableCell6.default, { sx: { textAlign: "left" }, children: [
      enableTags?.onTagClick && !isTagButtonInvisible && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        AddTagIcon_default,
        {
          onClick: () => enableTags?.onTagClick(row?.original),
          sx: {
            ...iconStyle,
            opacity: isTagbuttonDisabled && 0.25,
            pointerEvents: isTagbuttonDisabled && "none"
          }
        }
      ),
      actionButtonList?.map((item, key) => {
        let isButtonDisabled = row?.original?.actionButtonDisabled?.includes(
          item?.name
        );
        return row?.original?.actionButtonInvisible?.includes(
          item?.name
        ) ? null : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
          item.icon,
          {
            onClick: () => item.onClick(row?.original),
            sx: {
              ...iconStyle,
              opacity: isButtonDisabled && 0.25,
              pointerEvents: isButtonDisabled && "none"
            }
          },
          key
        );
      })
    ] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_Table5.default, { size: "small", ...getTableProps(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      import_TableHead2.default,
      {
        style: {
          borderBottom: "2px solid #2AB0C4"
        },
        children: headerGroups.map((headerGroup, index) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
          import_TableRow6.default,
          {
            sx: tableStyle2,
            ...headerGroup.getHeaderGroupProps(),
            children: [
              headerGroup.headers.map(
                (column, index2) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
                  import_TableCell6.default,
                  {
                    sx: headerCellStyle,
                    ...column.id === "selection" ? column.getHeaderProps() : column.getHeaderProps(
                      column.getSortByToggleProps()
                    ),
                    children: [
                      column.render("Header"),
                      !disableSorting && column.id !== "selection" && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
                        import_TableSortLabel.default,
                        {
                          active: column.isSorted,
                          direction: column.isSortedDesc ? "desc" : "asc"
                        }
                      )
                    ]
                  },
                  index2.toString()
                )
              ),
              showActionButtons && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ActionHeader, {})
            ]
          },
          index.toString()
        ))
      }
    ),
    !isLoading && data3.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_TableBody6.default, { sx: tableStyle2, children: customRows && !globalFilter ? customRows : page.map((row, index) => (prepareRow(row), /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
      import_TableRow6.default,
      {
        sx: bodyRowStyle2,
        ...row.getRowProps(),
        children: [
          row.cells.map(
            (cell, index2) => {
              let rowTagData = row?.original?.tags, showTagsInRow = index2 === 0 && enableTags?.tagsList && rowTagData?.length > 0 && enableTags?.displayTagsInRows;
              return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
                import_TableCell6.default,
                {
                  sx: bodyCellStyle,
                  ...cell.getCellProps(),
                  onClick: () => handleCellClick(
                    cell.value,
                    index2
                  ),
                  children: [
                    showTagsInRow && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
                      TagsIcon_default,
                      {
                        onClick: () => enableTags?.onTagClick(
                          row?.original
                        ),
                        sx: {
                          ...tagsIconStyle
                          // color: getTagColor(
                          // 	rowTagData?.[0],
                          // 	enableTags?.tagsList,
                          // ),
                        }
                      }
                    ),
                    cell.render("Cell")
                  ]
                },
                index2.toString()
              );
            }
          ),
          showActionButtons && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ActionButtons, { row })
        ]
      },
      index.toString()
    ))) }) : !isLoading && data3.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      TableLoader_default,
      {
        spinner: !1,
        colSpan,
        displayText: "No data to display"
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      TableLoader_default,
      {
        spinner: !0,
        colSpan,
        displayText: "Loading..."
      }
    )
  ] });
}, tableStyle2 = {
  "&:last-child td, &:last-child th": {
    border: "0 px solid #636161"
  },
  // round corners
  borderRadius: "5px 5px 5px 5px"
}, headerCellStyle = {
  p: "0 7px",
  fontSize: "11px",
  fontWeight: "medium",
  textTransform: "uppercase",
  fontFamily: "sans-serif"
}, bodyRowStyle2 = {
  "&:hover": { backgroundColor: "background.light" },
  fontFamily: "sans-serif"
}, bodyCellStyle = {
  p: "0 7px",
  fontSize: "12px",
  maxWidth: "350px",
  position: "relative",
  fontFamily: "sans-serif"
}, iconStyle = { mr: "5px", fontSize: "14px", cursor: "pointer" }, tagsIconStyle = {
  top: 2,
  left: -14.5,
  fontSize: "18px",
  position: "absolute",
  transform: "rotate(90deg)"
}, DataTable_default = DataTable;

// app/components/AdvancedTable/TableToolbar.tsx
var XLSX = __toESM(require("xlsx")), import_react_hot_toast2 = __toESM(require("react-hot-toast")), import_Box9 = __toESM(require("@mui/material/Box")), import_Button7 = __toESM(require("@mui/material/Button")), import_TextField6 = __toESM(require("@mui/material/TextField")), import_Typography14 = __toESM(require("@mui/material/Typography")), import_InputAdornment = __toESM(require("@mui/material/InputAdornment")), import_Search = __toESM(require("@mui/icons-material/Search"));

// app/utils/icons/DownloadFileIcon.jsx
var import_utils3 = require("@mui/material/utils"), import_jsx_runtime46 = require("react/jsx-runtime"), DownloadFileIcon = (0, import_utils3.createSvgIcon)(
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M21.17 3.25Q21.5 3.25 21.76 3.5 22 3.74 22 4.08V19.92Q22 20.26 21.76 20.5 21.5 20.75 21.17 20.75H7.83Q7.5 20.75 7.24 20.5 7 20.26 7 19.92V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V7.83Q2 7.5 2.24 7.24 2.5 7 2.83 7H7V4.08Q7 3.74 7.24 3.5 7.5 3.25 7.83 3.25M7 13.06L8.18 15.28H9.97L8 12.06L9.93 8.89H8.22L7.13 10.9L7.09 10.96L7.06 11.03Q6.8 10.5 6.5 9.96 6.25 9.43 5.97 8.89H4.16L6.05 12.08L4 15.28H5.78M13.88 19.5V17H8.25V19.5M13.88 15.75V12.63H12V15.75M13.88 11.38V8.25H12V11.38M13.88 7V4.5H8.25V7M20.75 19.5V17H15.13V19.5M20.75 15.75V12.63H15.13V15.75M20.75 11.38V8.25H15.13V11.38M20.75 7V4.5H15.13V7Z"
    }
  ),
  "DownloadFileIcon"
), DownloadFileIcon_default = DownloadFileIcon;

// app/components/AdvancedTable/FilterByHeader.tsx
var import_react32 = __toESM(require("react")), import_IconButton3 = __toESM(require("@mui/material/IconButton")), import_Menu = __toESM(require("@mui/material/Menu")), import_MenuItem3 = __toESM(require("@mui/material/MenuItem")), import_Rule = __toESM(require("@mui/icons-material/Rule")), import_Checkbox2 = __toESM(require("@mui/material/Checkbox")), import_ListItemText = __toESM(require("@mui/material/ListItemText")), import_jsx_runtime47 = require("react/jsx-runtime"), ITEM_HEIGHT2 = 48, FilterByHeader = ({
  headers,
  disabledHeaders,
  setColumns
}) => {
  let [anchorEl, setAnchorEl] = import_react32.default.useState(null), open = Boolean(anchorEl), handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }, handleClose = () => {
    setAnchorEl(null);
  }, allHeaders = headers?.map((header) => header?.Header), handleChange = (name) => {
    setSelectedHeader((prevSelected) => prevSelected.includes(name) ? prevSelected.filter((item) => item !== name) : [...prevSelected, name]);
  }, [selectedHeader, setSelectedHeader] = (0, import_react32.useState)([]);
  return (0, import_react32.useEffect)(() => {
    selectedHeader?.length >= 0 && setColumns(
      headers.filter((h) => !selectedHeader.includes(h.Header))
    );
  }, [selectedHeader]), /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      import_IconButton3.default,
      {
        "aria-label": "more",
        id: "long-button",
        "aria-controls": open ? "long-menu" : void 0,
        "aria-expanded": open ? "true" : void 0,
        "aria-haspopup": "true",
        onClick: handleClick,
        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_Rule.default, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      import_Menu.default,
      {
        id: "long-menu",
        MenuListProps: {
          "aria-labelledby": "long-button"
        },
        anchorEl,
        open,
        onClose: handleClose,
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT2 * 4.5,
            width: "20ch"
          }
        },
        children: allHeaders?.map((name) => /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
          import_MenuItem3.default,
          {
            value: name,
            disabled: disabledHeaders?.includes(name),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                import_Checkbox2.default,
                {
                  onChange: () => handleChange(name),
                  size: "small",
                  defaultChecked: !selectedHeader?.includes(name)
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                import_ListItemText.default,
                {
                  sx: {
                    ".MuiListItemText-primary": {
                      fontSize: "12px"
                    }
                  },
                  primary: name?.toUpperCase()
                }
              )
            ]
          },
          name
        ))
      }
    )
  ] });
}, FilterByHeader_default = FilterByHeader;

// app/components/AdvancedTable/TableToolbar.tsx
var import_jsx_runtime48 = require("react/jsx-runtime"), TableToolbar = ({
  data: data3,
  title,
  sheetData,
  globalFilter,
  setGlobalFilter,
  enableSearchRows,
  enableHeaderFilter,
  preGlobalFilteredRows,
  columns,
  ...restProps
}) => /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
  import_Box9.default,
  {
    sx: {
      p: "16px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
        import_Typography14.default,
        {
          sx: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "table.text",
            fontFamily: "IBM Plex Sans"
          },
          children: title
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_Box9.default, { style: { display: "flex", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
          import_Button7.default,
          {
            size: "small",
            variant: "contained",
            onClick: () => {
              if (data3?.length > 0) {
                let cleanData = sheetData?.data || data3?.map((data4) => (delete data4._id, data4)), worksheet = XLSX.utils.json_to_sheet(cleanData), workbook = XLSX.utils.book_new();
                return XLSX.utils.book_append_sheet(workbook, worksheet, "Excel"), worksheet["!cols"] = [{ wch: 20 }], XLSX.writeFile(workbook, sheetData?.title || "Data.xlsx", {
                  compression: !0
                });
              } else
                import_react_hot_toast2.default.error("No data found!");
            },
            sx: {
              boxShadow: 0,
              color: "common.white",
              textTransform: "none",
              mr: enableSearchRows && !restProps?.disabledHeaders && 1
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                DownloadFileIcon_default,
                {
                  sx: { fontSize: "20px", color: "common.white" }
                }
              ),
              "\xA0 Export to Excel"
            ]
          }
        ),
        restProps?.disabledHeaders && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(FilterByHeader_default, { ...restProps }),
        enableSearchRows && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          import_TextField6.default,
          {
            size: "small",
            value: globalFilter || "",
            inputProps: { "aria-label": "search" },
            placeholder: `Search among ${preGlobalFilteredRows?.length} records...`,
            onChange: (e) => setGlobalFilter(e.target.value || void 0),
            InputProps: {
              disableUnderline: !0,
              style: {
                width: "250px",
                borderRadius: 0,
                fontSize: "10px"
              },
              endAdornment: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_InputAdornment.default, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_Search.default, { sx: { color: "table.text" } }) })
            }
          }
        )
      ] })
    ]
  }
), TableToolbar_default = TableToolbar;

// app/components/AdvancedTable/TablePagination.tsx
var import_material11 = require("@mui/material"), import_jsx_runtime49 = require("react/jsx-runtime"), TablePagination = ({
  totalRows,
  pageSize: pageSize2,
  gotoPage,
  pageIndex
  // setPageSize,
}) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
  import_material11.TablePagination,
  {
    rowsPerPageOptions: [
      pageSize2
    ],
    page: pageIndex,
    count: totalRows,
    rowsPerPage: pageSize2,
    SelectProps: {
      MenuProps: {
        sx: { width: "inherit" },
        MenuListProps: {
          sx: { backgroundColor: "table.background" }
        }
      }
    },
    onPageChange: (event, newPage) => gotoPage(newPage),
    sx: {
      width: "100vw",
      borderBottom: 0,
      "& .MuiTablePagination-toolbar": { display: "absolute" }
    }
  }
), TablePagination_default = TablePagination;

// app/components/AdvancedTable/AdvancedTable.tsx
var import_jsx_runtime50 = require("react/jsx-runtime"), AdvancedTable = ({
  isLoading = !1,
  data: data3,
  headers,
  sx,
  ...restProps
}) => {
  let [columns, setColumns] = (0, import_react33.useState)(() => headers), rowData = (0, import_react33.useMemo)(() => data3 || [], [data3]), columnData = (0, import_react33.useMemo)(() => headers || [], [headers]), {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    setPageSize,
    gotoPage,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize: pageSize2, globalFilter }
  } = (0, import_react_table.useTable)(
    {
      data: rowData,
      columns: columnData || columns,
      initialState: { pageSize: 10 }
    },
    import_react_table.useGlobalFilter,
    import_react_table.useSortBy,
    import_react_table.usePagination
  ), props = {
    data: rowData,
    columns: columnData || columns,
    pageSize: pageSize2,
    isLoading,
    setPageSize,
    pageIndex,
    gotoPage,
    globalFilter,
    setGlobalFilter,
    preGlobalFilteredRows,
    totalRows: data3.length,
    title: restProps.title,
    sheetData: restProps.sheetData,
    enableSearchRows: restProps.enableSearchRows
  }, filterHeaderProps = {
    setColumns,
    disabledHeaders: restProps.disabledHeaders,
    headers
  }, tableProps = {
    page,
    isLoading,
    prepareRow,
    headerGroups,
    getTableProps,
    data: rowData,
    globalFilter,
    ...restProps
  };
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    import_TableContainer.default,
    {
      elevation: 3,
      component: import_Paper.default,
      sx: {
        borderRadius: 0,
        padding: "0 24px",
        backgroundColor: "table.background",
        marginTop: 2,
        ...sx
      },
      children: [
        restProps.displayToolbar && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          TableToolbar_default,
          {
            enableHeaderFilter: !1,
            ...props,
            ...filterHeaderProps
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(DataTable_default, { ...tableProps }),
        !restProps.enablePagination && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("br", {}),
        restProps.enablePagination && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(TablePagination_default, { ...props })
      ]
    }
  );
};
AdvancedTable.defaultProps = {
  displayToolbar: !0,
  enablePagination: !0,
  enableSearchRows: !0
};
var AdvancedTable_default = AdvancedTable;

// app/components/EightRemButton.tsx
var import_Button8 = __toESM(require("@mui/material/Button")), import_material12 = require("@mui/material"), EightRemButton = (0, import_material12.styled)(import_Button8.default)({
  minWidth: "8rem",
  color: "white"
}), EightRemButton_default = EightRemButton;

// app/components/TenRemButton.tsx
var import_Button9 = __toESM(require("@mui/material/Button")), import_material13 = require("@mui/material"), EightRemButton2 = (0, import_material13.styled)(import_Button9.default)({
  minWidth: "10rem",
  color: "white"
}), TenRemButton_default = EightRemButton2;

// app/components/ModuleTabButton.tsx
var import_Box10 = __toESM(require("@mui/material/Box")), import_react34 = require("@remix-run/react"), import_jsx_runtime51 = require("react/jsx-runtime"), ModuleTabButton = ({
  text,
  navigateTo,
  wide,
  children
}) => {
  let navigate = (0, import_react34.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
    import_Box10.default,
    {
      display: "flex",
      justifyContent: "right",
      alignContent: "center",
      marginBottom: 1,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_Box10.default, { mr: 2, children }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_Box10.default, { children: wide ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          TenRemButton_default,
          {
            variant: "contained",
            onClick: () => navigate("add"),
            children: text
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          EightRemButton_default,
          {
            variant: "contained",
            onClick: () => navigate(navigateTo),
            children: text
          }
        ) })
      ]
    }
  );
}, ModuleTabButton_default = ModuleTabButton;

// app/components/ModuleTabTitle.tsx
var import_react35 = require("react"), import_Typography15 = __toESM(require("@mui/material/Typography")), import_Tooltip = __toESM(require("@mui/material/Tooltip")), import_HelpOutline = __toESM(require("@mui/icons-material/HelpOutline")), import_jsx_runtime52 = require("react/jsx-runtime"), ModuleTitle = ({ title }) => {
  let [showIcon, setShowIcon] = (0, import_react35.useState)(!1), [showModal, setShowModal] = (0, import_react35.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        position: "relative"
      },
      onMouseEnter: () => setShowIcon(!0),
      onMouseLeave: () => setShowIcon(!1),
      children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { style: { display: "inline-flex", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          import_Typography15.default,
          {
            style: {
              marginTop: "0.8rem",
              color: "#000",
              textTransform: "uppercase"
            },
            variant: "body2",
            align: "center",
            gutterBottom: !0,
            children: title
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          "div",
          {
            style: {
              marginLeft: "5px",
              opacity: showIcon ? 1 : 0,
              transition: "opacity 0.3s ease"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_Tooltip.default, { title: "More Info", "aria-label": "more-info", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
              import_HelpOutline.default,
              {
                style: { fontSize: "1rem" },
                onClick: () => setShowModal(!0)
              }
            ) })
          }
        )
      ] })
    }
  );
}, ModuleTabTitle_default = ModuleTitle;

// app/routes/user.user-management.groups._index.tsx
var import_node8 = require("@remix-run/node"), import_react36 = require("@remix-run/react");

// app/utils/icons/EditIcon.tsx
var import_utils4 = require("@mui/material/utils"), import_jsx_runtime53 = require("react/jsx-runtime"), EditIcon = (0, import_utils4.createSvgIcon)(
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
    }
  ),
  "EditIcon"
), EditIcon_default = EditIcon;

// app/routes/user.user-management.groups._index.tsx
var import_Circle = __toESM(require("@mui/icons-material/Circle")), import_Typography16 = __toESM(require("@mui/material/Typography"));

// app/utils/tags/tagsColorList.ts
var tagsColorList = [
  { name: "Red", abbr: "RED", color: "#FF0000" },
  { name: "Orange", abbr: "ORA", color: "#FF7F00" },
  { name: "Yellow", abbr: "YEL", color: "#FFFF00" },
  { name: "Green", abbr: "GRE", color: "#00FF00" },
  { name: "Blue", abbr: "BLU", color: "#0000FF" },
  { name: "Indigo", abbr: "IND", color: "#4B0082" },
  { name: "Violet", abbr: "VIO", color: "#9400D3" },
  { name: "Purple", abbr: "PUR", color: "#9F2B68" },
  { name: "Teal", abbr: "TEA", color: "#19C3E6" },
  { name: "Pink", abbr: "PIN", color: "#E619D5" }
], tagsColorList_default = tagsColorList;

// app/utils/tags/getTagColor.ts
var getTagColor = (tagId, tagsList) => {
  let requiredTag = tagsList?.filter((item) => item._id === tagId)?.[0];
  return tagsColorList_default?.filter(
    (item) => item.abbr === requiredTag?.color
  )?.[0]?.color || "compatible";
};

// app/routes/user.user-management.groups._index.tsx
var import_jsx_runtime54 = require("react/jsx-runtime");
async function loader5() {
  return (0, import_node8.json)({
    customerUserTagList: []
  });
}
function CustomersTagsIndex() {
  let { customerUserTagList } = (0, import_react36.useLoaderData)(), { state } = (0, import_react36.useNavigation)(), navigate = (0, import_react36.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(import_jsx_runtime54.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(ModuleTabTitle_default, { title: "User Tags" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(ModuleTabButton_default, { text: "Add Tag", navigateTo: "add" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(AdvancedTable_default, { ...{
      isLoading: state === "loading",
      headers: [
        {
          Header: "Name",
          accessor: "name"
        },
        {
          Header: "Description",
          accessor: "description"
        },
        {
          Header: "Color",
          Cell: ({ row: { original } }) => /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(
            import_Typography16.default,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                fontFamily: "IBM Plex Sans, Regular"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
                  import_Circle.default,
                  {
                    fontSize: "small",
                    sx: {
                      color: getTagColor(
                        original._id,
                        customerUserTagList?.map((tag) => ({
                          _id: tag._id?.toString(),
                          color: tag?.color
                        }))
                      )
                    }
                  }
                ),
                "\xA0"
              ]
            }
          )
        }
      ],
      data: customerUserTagList,
      actionButtonList: [
        { icon: EditIcon_default, onClick: (row) => navigate(row._id) }
      ]
    } })
  ] });
}

// app/routes/user.user-management.list.$id.edit.tsx
var user_user_management_list_id_edit_exports = {};
__export(user_user_management_list_id_edit_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action6,
  default: () => CustomerWorkflowEdit,
  loader: () => loader6
});
var import_Typography17 = __toESM(require("@mui/material/Typography")), import_react37 = require("@remix-run/react");
var import_node9 = require("@remix-run/node");
var import_jsx_runtime55 = require("react/jsx-runtime"), loader6 = async ({ params }) => {
  let { id } = params;
  try {
    let user = await mongodb.db("cross-dock").collection("users").findOne({ _id: new ObjectId(id) }), list = await mongodb.db("cross-dock-data").collection("customerEntities").find().toArray(), permitedCustomers = list.map((obj) => ({ option: obj?.name, value: obj?._id })).filter((cust) => user.customerPermissions.includes(String(cust.value))), _user = {
      ...user,
      customerPermissions: permitedCustomers
    };
    return (0, import_node9.json)({
      customers: list.map((obj) => ({ option: obj?.name, value: obj?._id })),
      user: _user
    });
  } catch (err) {
    return console.error(err), (0, import_node9.json)({ error: err.message }, { status: 500 });
  }
}, action6 = async ({ request, params }) => {
  let { id } = params, formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries()), parsedData = JSON.parse(rawDocument.data);
  return parsedData = {
    ...parsedData,
    customerPermissions: parsedData.customerPermissions.map((obj) => obj.value)
  }, null;
};
function CustomerWorkflowEdit() {
  let { user } = (0, import_react37.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(UserForm_default, { defaultValues: user, editMode: !0 });
}
function ErrorBoundary() {
  let error = (0, import_react37.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(import_Typography17.default, { variant: "h6", align: "center", children: [
    "An unexpected error occurred: ",
    error.message
  ] }) : (0, import_react37.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_Typography17.default, { children: "Customer user not found!" }) : /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(import_Typography17.default, { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_Typography17.default, { variant: "h6", children: "Unknown Error" });
}

// app/routes/user.user-management.users._index.tsx
var user_user_management_users_index_exports = {};
__export(user_user_management_users_index_exports, {
  default: () => CustomerUserManagementIndex,
  loader: () => loader7
});
var import_RemoveRedEye = __toESM(require("@mui/icons-material/RemoveRedEye"));

// app/utils/icons/PasswordResetIcon.tsx
var import_utils5 = require("@mui/material/utils"), import_jsx_runtime56 = require("react/jsx-runtime"), PasswordResetIcon = (0, import_utils5.createSvgIcon)(
  /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12.63,2C18.16,2 22.64,6.5 22.64,12C22.64,17.5 18.16,22 12.63,22C9.12,22 6.05,20.18 4.26,17.43L5.84,16.18C7.25,18.47 9.76,20 12.64,20A8,8 0 0,0 20.64,12A8,8 0 0,0 12.64,4C8.56,4 5.2,7.06 4.71,11H7.47L3.73,14.73L0,11H2.69C3.19,5.95 7.45,2 12.63,2M15.59,10.24C16.09,10.25 16.5,10.65 16.5,11.16V15.77C16.5,16.27 16.09,16.69 15.58,16.69H10.05C9.54,16.69 9.13,16.27 9.13,15.77V11.16C9.13,10.65 9.54,10.25 10.04,10.24V9.23C10.04,7.7 11.29,6.46 12.81,6.46C14.34,6.46 15.59,7.7 15.59,9.23V10.24M12.81,7.86C12.06,7.86 11.44,8.47 11.44,9.23V10.24H14.19V9.23C14.19,8.47 13.57,7.86 12.81,7.86Z"
    }
  ),
  "PasswordResetIcon"
), PasswordResetIcon_default = PasswordResetIcon;

// app/routes/user.user-management.users._index.tsx
var import_react38 = require("@remix-run/react"), import_node10 = require("@remix-run/node");

// app/models/users/getAllCompanyUsers.ts
async function getAllCompanyUsers(request) {
  let companyId = await getUserCompanyId(request);
  return await (await adminDb_server_default).db(process.env.MONGODB_SAAS_ADMIN_DB).collection("saasUsers").find(
    {
      companyId: new ObjectId(companyId)
    },
    {
      projection: {
        password: 0
      }
    }
  ).toArray();
}

// app/routes/user.user-management.users._index.tsx
var import_jsx_runtime57 = require("react/jsx-runtime");
async function loader7({ request }) {
  let isUserAdmin = await getIsUserAdmin(request);
  return (0, import_node10.json)({
    userList: await getAllCompanyUsers(request),
    isUserAdmin
  });
}
function CustomerUserManagementIndex() {
  let { userList, isUserAdmin } = (0, import_react38.useLoaderData)(), { state } = (0, import_react38.useNavigation)(), navigate = (0, import_react38.useNavigate)(), tableHeaders = [
    { Header: "User Name", accessor: "name" },
    { Header: "Email", accessor: "email" }
    // { Header: "Contact No", accessor: "contactNumber" },
    // {
    //     Header: "Active",
    //     Cell: ActiveCell,
    // },
  ], actionButtonList = [
    {
      icon: EditIcon_default,
      onClick: (row) => navigate(row._id + "/edit")
    },
    {
      name: "password-change",
      icon: PasswordResetIcon_default,
      onClick: (row) => navigate(row._id + "/password-change")
    }
  ];
  isUserAdmin && actionButtonList.push({
    icon: import_RemoveRedEye.default,
    name: "view",
    onClick: (row) => navigate(row._id)
  });
  let tableProps = {
    isLoading: state === "loading",
    headers: tableHeaders,
    data: userList?.map((user) => ({
      ...user,
      actionButtonDisabled: user?.isAdmin ? ["view"] : []
    })),
    actionButtonList
  };
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(import_jsx_runtime57.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(ModuleTabTitle_default, { title: "User List" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(ModuleTabButton_default, { text: "Add user", navigateTo: "add", wide: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AdvancedTable_default, { ...tableProps })
  ] });
}

// app/routes/user.user-management.groups.$id.tsx
var user_user_management_groups_id_exports = {};
__export(user_user_management_groups_id_exports, {
  action: () => action7,
  default: () => CustomerUserTagEdit,
  loader: () => loader8
});
var import_react40 = require("@remix-run/react"), import_node11 = require("@remix-run/node");

// app/components/customers/forms/CustomerUserTagForm.tsx
var import_react_hook_form7 = require("react-hook-form"), import_react39 = require("@remix-run/react"), import_Typography18 = __toESM(require("@mui/material/Typography")), import_Grid10 = __toESM(require("@mui/material/Grid")), import_MenuItem4 = __toESM(require("@mui/material/MenuItem")), import_TextField7 = __toESM(require("@mui/material/TextField")), import_Circle2 = __toESM(require("@mui/icons-material/Circle"));
var import_jsx_runtime58 = require("react/jsx-runtime"), CustomerUserTagFormFields = ({
  defaultValues,
  tagList
}) => {
  let { register } = (0, import_react_hook_form7.useForm)({
    defaultValues
  }), usedTagColorList = tagList?.map((color) => color?.color).filter((color) => color !== void 0);
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_Grid10.default, { container: !0, spacing: 1, style: { alignItems: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_Grid10.default, { item: !0, xs: 12, sm: 6, children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_Typography18.default, { children: "Tag Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
        import_Typography18.default,
        {
          style: {
            fontSize: "11.5px"
          },
          children: "Enter the name of the tag."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_Grid10.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "name",
        label: "Tag Name",
        required: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_Grid10.default, { item: !0, xs: 12, sm: 6, children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_Typography18.default, { children: "Description" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
        import_Typography18.default,
        {
          style: {
            fontSize: "11.5px"
          },
          children: "Enter the description of the tag."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_Grid10.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "description",
        label: "Description",
        required: !0,
        multiline: !0,
        rows: 2
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_Grid10.default, { item: !0, xs: 12, sm: 6, children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_Typography18.default, { children: "Choose Color" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
        import_Typography18.default,
        {
          style: {
            fontSize: "11.5px"
          },
          children: "Choose a color for the tag."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_Grid10.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
      import_TextField7.default,
      {
        select: !0,
        fullWidth: !0,
        size: "small",
        label: "Choose a color",
        defaultValue: defaultValues?.color,
        ...register("color", {
          value: defaultValues?.color
        }),
        children: tagsColorList_default.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
          import_MenuItem4.default,
          {
            value: item.abbr,
            disabled: usedTagColorList?.includes(item?.abbr),
            children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
              import_Typography18.default,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "IBM Plex Sans, Regular"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
                    import_Circle2.default,
                    {
                      fontSize: "small",
                      sx: { color: item.color }
                    }
                  ),
                  "\xA0",
                  item.name
                ]
              }
            )
          },
          index
        ))
      }
    ) })
  ] });
}, CustomerUserTagForm = ({
  defaultValues,
  editMode = !1,
  tagList
}) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_react39.Form, { method: "POST", children: [
  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_Grid10.default, { container: !0, spacing: 2, marginTop: 1, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_Grid10.default, { item: !0, xs: 8, children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
      FormTitleWithBackButton_default,
      {
        title: "User Tag",
        editMode
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_Grid10.default, { container: !0, alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
      CustomerUserTagFormFields,
      {
        defaultValues,
        tagList
      }
    ) })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(SubmitOrSave_default, {})
] }), CustomerUserTagForm_default = CustomerUserTagForm;

// app/utils/zod/customers/customerTagDBSchema.ts
var import_zod3 = require("zod");

// app/utils/zod/transformers/trimString.ts
var import_zod = require("zod"), trimString_default = import_zod.z.string().transform((value) => value.trim());

// app/utils/zod/transformers/transformObjectId.ts
var import_mongodb12 = require("mongodb"), import_zod2 = require("zod"), transformObjectId_default = import_zod2.z.instanceof(import_mongodb12.ObjectId).or(
  import_zod2.z.string().refine((value) => import_mongodb12.ObjectId.isValid(value), {
    message: "Invalid ObjectId"
  })
).transform((value) => typeof value == "string" ? new import_mongodb12.ObjectId(value) : value);

// app/utils/zod/customers/customerTagDBSchema.ts
var customerTagDBSchema = import_zod3.z.object({
  _id: transformObjectId_default.optional(),
  name: trimString_default,
  tagType: import_zod3.z.enum(["user", "entity"]),
  color: trimString_default.optional().nullable(),
  description: trimString_default.optional(),
  created: import_zod3.z.object({
    at: import_zod3.z.date(),
    by: transformObjectId_default
  }).optional(),
  updated: import_zod3.z.object({
    at: import_zod3.z.date(),
    by: transformObjectId_default
  }).optional()
}), customerTagDBSchema_default = customerTagDBSchema;

// app/routes/user.user-management.groups.$id.tsx
var import_jsx_runtime59 = require("react/jsx-runtime"), loader8 = async ({ params }) => {
  let { id } = params;
  return (0, import_node11.json)({});
}, action7 = async ({ request, params }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(
    formData.entries()
  );
  rawDocument = {
    ...rawDocument,
    tagType: "user"
  };
  try {
    let parsedDocument = customerTagDBSchema_default.parse(rawDocument);
    return (0, import_node11.redirect)("../");
  } catch (error) {
    return (0, import_node11.json)({ error: error.message }, { status: 400 });
  }
};
function CustomerUserTagEdit() {
  let { customerUserTag, tagList } = (0, import_react40.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
    CustomerUserTagForm_default,
    {
      tagList,
      defaultValues: customerUserTag,
      editMode: !0
    }
  );
}

// app/routes/user.user-management.groups.add.tsx
var user_user_management_groups_add_exports = {};
__export(user_user_management_groups_add_exports, {
  action: () => action8,
  default: () => CustomerUserTagAdd,
  loader: () => loader9
});
var import_react41 = require("@remix-run/react"), import_node12 = require("@remix-run/node");
var import_jsx_runtime60 = require("react/jsx-runtime"), loader9 = async () => (0, import_node12.json)({ tagList: [] }), action8 = async ({ request }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(
    formData.entries()
  );
  rawDocument = {
    ...rawDocument,
    tagType: "user"
  };
  try {
    let parsedDocument = customerTagDBSchema_default.parse(rawDocument), userId = await getUserId(request);
    return (0, import_node12.redirect)("../");
  } catch (error) {
    return (0, import_node12.json)({ error: error.message }, { status: 400 });
  }
};
function CustomerUserTagAdd() {
  let { tagList } = (0, import_react41.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(CustomerUserTagForm_default, { defaultValues: null, tagList });
}

// app/routes/user.user-management.users.$vid.tsx
var user_user_management_users_vid_exports = {};
__export(user_user_management_users_vid_exports, {
  action: () => action9,
  default: () => UserManagementPermissionsModal,
  loader: () => loader10
});
var import_node13 = require("@remix-run/node"), import_Box11 = __toESM(require("@mui/material/Box")), import_Checkbox3 = __toESM(require("@mui/material/Checkbox")), import_react42 = require("@remix-run/react");

// app/models/users/getUserPermission.ts
async function getUserPermission(companyDb, userId) {
  return await mongodb.db(companyDb).collection("permissions").findOne({
    userId: new ObjectId(userId)
  });
}

// app/models/users/updateReadPermission.ts
async function updateReadPermissions(userId, companyDb, module2, readAccess) {
  return await mongodb.db(companyDb).collection("permissions").updateOne(
    {
      userId: new ObjectId(userId),
      "permissions.module": module2
    },
    {
      $set: {
        "permissions.$.read": !readAccess
      }
    }
  );
}

// app/models/users/updateWritePermission.ts
async function updateWritePermissions(userId, companyDb, module2, writeAccess) {
  return await mongodb.db(companyDb).collection("permissions").updateOne(
    {
      userId: new ObjectId(userId),
      "permissions.module": module2
    },
    {
      $set: {
        "permissions.$.write": !writeAccess
      }
    }
  );
}

// app/routes/user.user-management.users.$vid.tsx
var import_jsx_runtime61 = require("react/jsx-runtime"), CheckboxCell = ({ row, type }) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react42.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
  import_Box11.default,
  {
    sx: {
      display: "flex",
      justifyContent: "left",
      alignItems: "center"
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { type: "hidden", name: "module", value: row?.module }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { type: "hidden", name: `${type}`, value: row[type] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_Checkbox3.default, { inputProps: {
        type: "submit"
      }, defaultChecked: !row || row[type], sx: {
        fontSize: "1rem"
      }, size: "small" })
    ]
  }
) }), getUserPermissionsTableData = (userPermissions) => moduleList_default.map((moduleItem) => {
  let permission = userPermissions?.permissions?.find((perm) => perm.module === moduleItem.path);
  return {
    sectionName: moduleItem.sectionName,
    read: !!permission?.read,
    write: !!permission?.write,
    module: moduleItem.path
  };
}), loader10 = async ({ request, params }) => {
  let companyDb = await getCompanyDb(request), userPermission = await getUserPermission(companyDb, params?.vid);
  return (0, import_node13.json)({ userPermission });
}, action9 = async ({ request, params }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries()), companyDb = await getCompanyDb(request);
  return rawDocument?.hasOwnProperty("read") && await updateReadPermissions(
    params?.vid,
    companyDb,
    rawDocument?.module,
    rawDocument?.read === "true"
  ), rawDocument?.hasOwnProperty("write") && await updateWritePermissions(
    params?.vid,
    companyDb,
    rawDocument?.module,
    rawDocument?.write === "true"
  ), console.log("action", rawDocument, formData), (0, import_node13.json)({});
};
function UserManagementPermissionsModal() {
  let { userPermission } = (0, import_react42.useLoaderData)(), { state } = (0, import_react42.useNavigation)(), navigate = (0, import_react42.useNavigate)(), tableProps = {
    isLoading: state === "loading",
    headers: [
      { Header: "Module", accessor: "sectionName" },
      { Header: "Read Access", Cell: (props) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(CheckboxCell, { row: props.row.original, type: "read" }) },
      { Header: "Write Access", Cell: (props) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(CheckboxCell, { row: props.row.original, type: "write" }) }
    ],
    enablePagination: !1,
    displayToolbar: !1,
    data: userPermission ? getUserPermissionsTableData(userPermission) : []
  };
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Modal_default, { show: !0, modalTitle: "User Permissions", maxWidth: "lg", closeModal: () => navigate(-1), children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(AdvancedTable_default, { ...tableProps }) });
}

// app/routes/user.workflows.functions._index.tsx
var user_workflows_functions_index_exports = {};
__export(user_workflows_functions_index_exports, {
  default: () => WorkflowsListIndex,
  loader: () => loader11
});
var import_node14 = require("@remix-run/node"), import_react43 = require("@remix-run/react");
var import_RemoveRedEye2 = __toESM(require("@mui/icons-material/RemoveRedEye")), import_jsx_runtime62 = require("react/jsx-runtime");
async function loader11({ request }) {
  return (0, import_node14.json)({});
}
function WorkflowsListIndex() {
  let { state } = (0, import_react43.useNavigation)(), navigate = (0, import_react43.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_jsx_runtime62.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(ModuleTabTitle_default, { title: "Function List" }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(ModuleTabButton_default, { text: "Add Function", navigateTo: "add", wide: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(AdvancedTable_default, { ...{
      isLoading: state === "loading",
      headers: [
        { Header: "Function Name", accessor: "functionName" },
        { Header: "Definition", accessor: "definition" }
      ],
      data: [],
      actionButtonList: [
        {
          icon: EditIcon_default,
          onClick: (row) => navigate(row._id + "/edit")
        },
        {
          icon: import_RemoveRedEye2.default,
          onClick: (row) => navigate(row._id)
        }
      ]
    } })
  ] });
}

// app/routes/user.workflows.list.$vid._index.tsx
var user_workflows_list_vid_index_exports = {};
__export(user_workflows_list_vid_index_exports, {
  action: () => action10,
  default: () => CustomerWorkflowViewIndex2,
  loader: () => loader12
});
var import_node15 = require("@remix-run/node"), import_jsx_runtime63 = require("react/jsx-runtime"), loader12 = async () => (0, import_node15.json)({}), action10 = async ({ request }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries());
  return {};
};
function CustomerWorkflowViewIndex2() {
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("h1", { children: "View a customer workflow." });
}

// app/routes/user.workflows.list.add.$formNo.tsx
var user_workflows_list_add_formNo_exports = {};
__export(user_workflows_list_add_formNo_exports, {
  default: () => CustomerWorkflowAdd3,
  loader: () => loader13
});
var import_node16 = require("@remix-run/node"), import_react44 = require("@remix-run/react"), import_Box12 = __toESM(require("@mui/material/Box"));
var import_jsx_runtime64 = require("react/jsx-runtime"), loader13 = async ({ request, params }) => {
  let { formNo } = params;
  return [1, 2].includes(Number(formNo)) ? (0, import_node16.json)({}) : (0, import_node16.redirect)("../1");
};
function CustomerWorkflowAdd3() {
  let { formNo } = (0, import_react44.useParams)(), { methods } = useParentData();
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_jsx_runtime64.Fragment, { children: [
    Number(formNo) === 1 && /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_Box12.default, { children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(CustomerWorkflowBasicForm_default, { methods, defaultValues: null }) }, formNo),
    Number(formNo) === 2 && /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
      Outlet2,
      {
        data: {
          methods
        }
      }
    )
  ] });
}

// app/routes/user.analytics.customer._index.tsx
var user_analytics_customer_index_exports = {};
__export(user_analytics_customer_index_exports, {
  data: () => data,
  default: () => FeroAnalyticsCustomerIndex,
  options: () => options2
});
var import_chart = require("chart.js"), import_react_chartjs_2 = require("react-chartjs-2"), import_jsx_runtime65 = require("react/jsx-runtime");
import_chart.Chart.register(
  import_chart.CategoryScale,
  import_chart.LinearScale,
  import_chart.BarElement,
  import_chart.Title,
  import_chart.Tooltip,
  import_chart.Legend
);
var options2 = {
  plugins: {
    title: {
      display: !0,
      text: "Chart.js Bar Chart - Stacked"
    }
  },
  responsive: !0,
  interaction: {
    mode: "index",
    intersect: !1
  },
  scales: {
    x: {
      stacked: !0
    },
    y: {
      stacked: !0
    }
  }
}, labels = ["January", "February", "March", "April", "May", "June", "July"], data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [120, 150, 200, 180, 250, 300, 280],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0"
    },
    {
      label: "Dataset 2",
      data: [80, 120, 160, 140, 200, 250, 220],
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0"
    },
    {
      label: "Dataset 3",
      data: [50, 80, 100, 120, 150, 200, 180],
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 1"
    }
  ]
};
function FeroAnalyticsCustomerIndex() {
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_jsx_runtime65.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("h1", { children: "Fero Analytics Customer" }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react_chartjs_2.Bar, { data, options: options2 })
  ] });
}

// app/routes/user.analytics.workflow._index.tsx
var user_analytics_workflow_index_exports = {};
__export(user_analytics_workflow_index_exports, {
  data: () => data2,
  default: () => FeroAnalyticsWorkflow,
  options: () => options3
});
var import_chart2 = require("chart.js"), import_react_chartjs_22 = require("react-chartjs-2"), import_jsx_runtime66 = require("react/jsx-runtime");
import_chart2.Chart.register(
  import_chart2.CategoryScale,
  import_chart2.LinearScale,
  import_chart2.BarElement,
  import_chart2.Title,
  import_chart2.Tooltip,
  import_chart2.Legend
);
var options3 = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: !0,
  plugins: {
    legend: {
      position: "right"
    },
    title: {
      display: !0,
      text: "Chart.js Horizontal Bar Chart"
    }
  }
}, labels2 = ["January", "February", "March", "April", "May", "June", "July"], data2 = {
  labels: labels2,
  datasets: [
    {
      label: "Dataset 1",
      data: [50, 30, 70, 40, 60, 45, 80],
      // Replace with your own data
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Dataset 2",
      data: [70, 20, 50, 80, 30, 65, 45],
      // Replace with your own data
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};
function FeroAnalyticsWorkflow() {
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(import_jsx_runtime66.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("h1", { children: "Fero Analytics Workflow" }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react_chartjs_22.Bar, { options: options3, data: data2 }),
    ";"
  ] });
}

// app/routes/user.user-management.list.$vid.tsx
var user_user_management_list_vid_exports = {};
__export(user_user_management_list_vid_exports, {
  default: () => CustomerUserView
});
var import_jsx_runtime67 = require("react/jsx-runtime");
function CustomerUserView() {
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(Outlet2, {});
}

// app/routes/user.user-management.users.add.tsx
var user_user_management_users_add_exports = {};
__export(user_user_management_users_add_exports, {
  action: () => action11,
  default: () => AddUserForm,
  loader: () => loader14
});
var import_node17 = require("@remix-run/node");

// app/models/users/insertUser.ts
var import_bcryptjs2 = __toESM(require("bcryptjs"));

// app/utils/zod/adminUserSchema.ts
var import_zod4 = require("zod");
var adminSaaSUserDBSchema = import_zod4.z.object({
  _id: transformObjectId_default.optional(),
  email: import_zod4.z.string().email(),
  password: import_zod4.z.string().min(8).max(100),
  companyId: transformObjectId_default,
  name: import_zod4.z.string(),
  department: import_zod4.z.string().nullable().optional(),
  // flag to check if user is admin
  isAdmin: import_zod4.z.boolean().default(!1)
}), adminUserSchema_default = adminSaaSUserDBSchema;

// app/models/users/insertUser.ts
async function insertUser(name, email, isAdmin, companyId, unEncryptedPassword) {
  let password = await import_bcryptjs2.default.hash(unEncryptedPassword, 10), data3 = {
    name,
    email,
    isAdmin,
    password,
    companyId
  }, validateUser = adminUserSchema_default.parse(data3);
  return (await adminDb_server_default).db(process.env.MONGODB_SAAS_ADMIN_DB).collection("saasUsers").insertOne(validateUser);
}

// app/routes/user.user-management.users.add.tsx
var import_react45 = require("@remix-run/react");

// app/utils/zod/userPermissionsSchema.ts
var import_zod5 = require("zod");
var userPermissionsSchema = import_zod5.z.object({
  userId: transformObjectId_default,
  permissions: import_zod5.z.object({
    module: import_zod5.z.string(),
    read: import_zod5.z.boolean().default(!0),
    write: import_zod5.z.boolean().default(!1)
  }).array()
}), userPermissionsSchema_default = userPermissionsSchema;

// app/models/users/createUserPermissions.ts
async function createUserPermissions(userId, permissions, companyDb) {
  let validatePermissions = userPermissionsSchema_default.parse({
    userId,
    permissions
  });
  return await mongodb.db(companyDb).collection("permissions").insertOne(validatePermissions);
}

// app/routes/user.user-management.users.add.tsx
var import_jsx_runtime68 = require("react/jsx-runtime"), loader14 = async ({ request }) => {
  let isAdmin = await getIsUserAdmin(request);
  return (0, import_node17.json)({ isAdmin });
}, action11 = async ({ request }) => {
  try {
    let formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries());
    if (rawDocument = {
      ...rawDocument,
      permissions: JSON.parse(rawDocument.permissions)
    }, await checkIfUserExists(rawDocument.email))
      return (0, import_node17.json)({ error: "User with the same email already exists" }, { status: 400 });
    if (rawDocument.password !== rawDocument.rePassword)
      return (0, import_node17.json)({ error: "Passwords do not match" }, { status: 400 });
    let companyId = await getUserCompanyId(request), companyDb = await getCompanyDb(request), insertedUser = await insertUser(
      rawDocument.name,
      rawDocument.email,
      rawDocument.isAdmin === "on",
      companyId,
      rawDocument.password
    );
    if (insertedUser.insertedId && rawDocument.isAdmin !== "on")
      return await createUserPermissions(insertedUser.insertedId.toString(), rawDocument?.permissions, companyDb), (0, import_node17.redirect)("../");
    throw new Error("Failed to insert user");
  } catch (error) {
    return console.error(error), (0, import_node17.json)(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
function AddUserForm() {
  let { isAdmin } = (0, import_react45.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(UserForm_default, { defaultValues: null, isAdmin });
}

// app/routes/user.workflows.design.$id.edit.tsx
var user_workflows_design_id_edit_exports = {};
__export(user_workflows_design_id_edit_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action12,
  default: () => CustomerWorkflowEdit2,
  loader: () => loader15
});
var import_Typography19 = __toESM(require("@mui/material/Typography")), import_react46 = require("@remix-run/react"), import_node18 = require("@remix-run/node"), import_jsx_runtime69 = require("react/jsx-runtime"), loader15 = async ({ params }) => {
  let { id } = params;
  return (0, import_node18.json)({});
}, action12 = async ({ request, params }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries());
  return {};
};
function CustomerWorkflowEdit2() {
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(import_jsx_runtime69.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_Typography19.default, { variant: "h6", children: "Edit Customer Design" }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_Typography19.default, { variant: "body1", children: "Form to edit a customer design." })
  ] });
}
function ErrorBoundary2() {
  let error = (0, import_react46.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(import_Typography19.default, { variant: "h6", align: "center", children: [
    "An unexpected error occurred: ",
    error.message
  ] }) : (0, import_react46.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_Typography19.default, { children: "Customer design not found!" }) : /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(import_Typography19.default, { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_Typography19.default, { variant: "h6", children: "Unknown Error" });
}

// app/routes/user.support.list.$vid._index.tsx
var user_support_list_vid_index_exports = {};
__export(user_support_list_vid_index_exports, {
  action: () => action13,
  default: () => CustomerSupportViewIndex,
  loader: () => loader16
});
var import_react49 = require("@remix-run/react"), import_node19 = require("@remix-run/node"), import_Typography24 = __toESM(require("@mui/material/Typography")), import_Stack4 = __toESM(require("@mui/material/Stack")), import_Box18 = __toESM(require("@mui/material/Box"));

// app/components/customers/SupportTicket/TicketDescription.tsx
var import_Box14 = __toESM(require("@mui/material/Box"));

// app/components/customers/SupportTicket/ContentBox.tsx
var import_Box13 = __toESM(require("@mui/material/Box")), import_Typography20 = __toESM(require("@mui/material/Typography")), import_Stack2 = __toESM(require("@mui/material/Stack")), import_jsx_runtime70 = require("react/jsx-runtime"), ContentBox = ({
  title,
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(import_Stack2.default, { sx: { border: "1px solid #c3c3c3", borderRadius: 1 }, children: [
  /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_Box13.default, { sx: { bgcolor: "#c3c3c3", p: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_Typography20.default, { variant: "body1", color: "initial", children: title }) }),
  /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_Box13.default, { sx: { p: 1 }, children })
] }), ContentBox_default = ContentBox;

// app/components/customers/SupportTicket/TicketDescription.tsx
var import_jsx_runtime71 = require("react/jsx-runtime"), TicketDescription = ({ description }) => /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_Box14.default, { sx: { mb: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(ContentBox_default, { title: "Description", children: description }) }), TicketDescription_default = TicketDescription;

// app/components/customers/SupportTicket/TicketComments.tsx
var import_react47 = require("react"), import_react48 = require("@remix-run/react"), import_Box15 = __toESM(require("@mui/material/Box")), import_Typography21 = __toESM(require("@mui/material/Typography")), import_Stack3 = __toESM(require("@mui/material/Stack")), import_Button10 = __toESM(require("@mui/material/Button")), import_TextareaAutosize = __toESM(require("@mui/material/TextareaAutosize"));

// app/utils/date/showReadableTime.ts
var import_dayjs = __toESM(require("dayjs")), checkIfDate = (stringValue) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(stringValue), readableDate = (inputDate) => checkIfDate(inputDate) ? new Date(inputDate).toLocaleString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric"
}) : null, readableTime12hFmt = (inputTime) => checkIfDate(inputTime) ? new Date(inputTime).toLocaleString("en-GB", {
  hour: "numeric",
  minute: "numeric",
  // second: "numeric",
  hour12: !0
}) : null, utcToDubaiTime = (utc_date, format = "MMM DD, YYYY") => (0, import_dayjs.default)(utc_date).add(4, "hour").format(format), showReadableDateTime = (date) => `${readableDate(date)}, ${readableTime12hFmt(date)}`, showReadableTime_default = showReadableDateTime;

// app/components/customers/SupportTicket/TicketComments.tsx
var import_jsx_runtime72 = require("react/jsx-runtime"), TicketComments = ({ comments }) => {
  let [message, setMessage] = (0, import_react47.useState)(""), scrollRef = (0, import_react47.useRef)(null), isButtonDisabled = message.trim() === "";
  return (0, import_react47.useEffect)(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" }), setMessage("");
  }, [comments]), /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_Box15.default, { sx: {}, children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(ContentBox_default, { title: "Comments", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_Stack3.default, { sx: { height: 500 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
      import_Box15.default,
      {
        sx: {
          width: "100%",
          px: 1,
          mb: 1,
          flexGrow: 1,
          overflowY: "auto"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_Stack3.default, { children: [
          comments.map((obj) => /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_jsx_runtime72.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_Box15.default, { sx: { py: 1 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
                import_Typography21.default,
                {
                  variant: "body1",
                  sx: {
                    fontWeight: 500,
                    color: "#353535"
                  },
                  children: obj?.user?.name
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
                import_Typography21.default,
                {
                  variant: "body2",
                  sx: { color: "#353535" },
                  children: obj?.comment
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
                import_Typography21.default,
                {
                  variant: "body2",
                  sx: {
                    color: "#353535",
                    fontSize: 12,
                    pt: "4px"
                  },
                  children: showReadableTime_default(
                    obj?.createdAt.toString()
                  )
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_Box15.default, { children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("hr", {}) })
          ] })),
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_Box15.default, { sx: { height: 50 }, ref: scrollRef })
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react48.Form, { method: "POST", action: ".", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_Box15.default, { sx: { display: "flex" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
        import_TextareaAutosize.default,
        {
          placeholder: "comment...",
          name: "comment",
          maxRows: 5,
          minRows: 5,
          style: { width: "100%", resize: "none" },
          value: message,
          onChange: (e) => setMessage(e.target.value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
        import_Box15.default,
        {
          sx: {
            display: "flex",
            py: 1,
            pl: 1,
            placeItems: "center"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            import_Button10.default,
            {
              type: "submit",
              disabled: isButtonDisabled,
              variant: "contained",
              children: "Comment"
            }
          )
        }
      )
    ] }) })
  ] }) }) });
}, TicketComments_default = TicketComments;

// app/components/customers/SupportTicket/TicketInformation.tsx
var import_Box16 = __toESM(require("@mui/material/Box")), import_Typography22 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime73 = require("react/jsx-runtime"), TicketInformation = ({ info }) => /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_Box16.default, { sx: { mb: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(ContentBox_default, { title: "Information", children: [
  /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
    import_Box16.default,
    {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        mb: 1
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_Typography22.default, { variant: "body1", color: "initial", children: "Date" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_Typography22.default, { variant: "body1", color: "initial", children: info.date })
      ]
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
    import_Box16.default,
    {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        mb: 1
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_Typography22.default, { variant: "body1", color: "initial", children: "Added By" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_Typography22.default, { variant: "body1", color: "initial", children: info.addedBy })
      ]
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
    import_Box16.default,
    {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        mb: 1
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_Typography22.default, { variant: "body1", color: "initial", children: "Module" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_Typography22.default, { variant: "body1", color: "initial", children: info.module })
      ]
    }
  )
] }) }), TicketInformation_default = TicketInformation;

// app/components/customers/SupportTicket/TicketLogs.tsx
var import_Box17 = __toESM(require("@mui/material/Box")), import_Typography23 = __toESM(require("@mui/material/Typography")), import_Timeline = __toESM(require("@mui/lab/Timeline")), import_TimelineItem = __toESM(require("@mui/lab/TimelineItem")), import_TimelineSeparator = __toESM(require("@mui/lab/TimelineSeparator")), import_TimelineConnector = __toESM(require("@mui/lab/TimelineConnector")), import_TimelineContent = __toESM(require("@mui/lab/TimelineContent")), import_TimelineDot = __toESM(require("@mui/lab/TimelineDot"));
var import_jsx_runtime74 = require("react/jsx-runtime"), TicketLogs = ({ logs: logs2 = [] }) => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_Box17.default, { sx: {}, children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(ContentBox_default, { title: "Logs", children: /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(import_Box17.default, { sx: { overflowY: "auto", height: 500 }, children: [
  /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_Typography23.default, { variant: "body1", color: "initial", children: "Ticket Logs" }),
  /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    import_Timeline.default,
    {
      sx: {
        [`& .${import_TimelineItem.timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0
        }
      },
      children: logs2.map((log) => /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(import_TimelineItem.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(import_TimelineSeparator.default, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_TimelineDot.default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_TimelineConnector.default, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(import_TimelineContent.default, { sx: { py: "12px", px: 2 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(
            import_Box17.default,
            {
              sx: {
                display: "flex",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
                  import_Typography23.default,
                  {
                    variant: "body2",
                    sx: { fontSize: 12 },
                    children: showReadableTime_default(
                      log.createdAt.toString()
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_Typography23.default, { variant: "body2", children: log.user?.name || "" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_Typography23.default, { children: log.details?.message || "" })
        ] })
      ] }, log.createdAt.toString()))
    }
  )
] }) }) }), TicketLogs_default = TicketLogs;

// app/models/customers/customerTicket/getSupportTicketByIdPromise.server.ts
async function getSupportTicketByIdPromise(ticketId, optional = {}) {
  return mongodb.db(optional.companyDb || "cross-dock-data").collection("customerSupport").findOne({ _id: new ObjectId(ticketId) });
}

// app/models/customers/customerTicket/comments/addCommentInTicketPromise.server.ts
async function addCommentInTicketPromise(ticketId, commentObj, optional = {}) {
  return mongodb.db(optional.companyDb || "cross-dock-data").collection("customerSupport").updateOne(
    { _id: new ObjectId(ticketId) },
    {
      $push: {
        comments: commentObj,
        logs: {
          $each: [{
            user: commentObj.user,
            createdAt: /* @__PURE__ */ new Date(),
            details: {
              message: `${commentObj.user.name} commented!`
            }
          }],
          $position: 0
        }
      }
    }
  );
}

// app/utils/zod/supportTicket/comment/index.ts
var import_zod7 = require("zod");

// app/utils/zod/transformers/transformDate.ts
var import_zod6 = require("zod"), transformDate_default = import_zod6.z.date().or(
  import_zod6.z.string().refine((value) => {
    let date = new Date(value);
    return !isNaN(date.getTime());
  }, {
    // Custom error message
    message: "Invalid date"
  })
).transform((value) => new Date(value));

// app/utils/zod/supportTicket/comment/index.ts
var commentDBSchema = import_zod7.z.object({
  user: import_zod7.z.object({
    _id: transformObjectId_default,
    name: import_zod7.z.string()
  }),
  comment: import_zod7.z.string(),
  createdAt: transformDate_default
}), comment_default = commentDBSchema;

// app/routes/user.support.list.$vid._index.tsx
var import_jsx_runtime75 = require("react/jsx-runtime"), loader16 = async ({ request, params }) => {
  try {
    let companyDb = await getCompanyDb(request), ticketId = params?.vid, ticketObject = await getSupportTicketByIdPromise(ticketId, { companyDb });
    if (!ticketObject)
      return (0, import_node19.json)({ comments: [] });
    let user = await getUserById(ticketObject.created.by.toString());
    return (0, import_node19.json)({
      ticket: {
        ...ticketObject,
        created: { ...ticketObject.created, by: user?.name }
      }
    });
  } catch (error) {
    return console.error("An error occurred:", error), (0, import_node19.json)({ ticket: {} });
  }
}, action13 = async ({ request, params }) => {
  try {
    let ticketId = params?.vid, companyDb = await getCompanyDb(request), userId = await getUserId(request), user = await getUserById(userId), formData = await request.formData(), commentObject = {
      comment: Object.fromEntries(
        formData.entries()
      )?.comment,
      // user: { _id: new ObjectId(userId), name: user?.name as string },
      user: { _id: new ObjectId(userId), name: `${user?.firstName} ${user?.lastName}` },
      createdAt: /* @__PURE__ */ new Date()
    }, validatedCommentObject = comment_default.parse(commentObject), { acknowledged } = await addCommentInTicketPromise(
      ticketId,
      validatedCommentObject,
      {
        companyDb
      }
    );
    if (!acknowledged)
      throw new Error("Failed to add comment");
    let ticketObj = await getSupportTicketByIdPromise(ticketId, { companyDb });
    return (0, import_node19.json)({ comments: ticketObj?.comments || [] });
  } catch (error) {
    return console.error("An error occurred:", error), (0, import_node19.json)({ comments: [] });
  }
};
function CustomerSupportViewIndex() {
  let { ticket } = (0, import_react49.useLoaderData)(), { comments: actionComment } = (0, import_react49.useActionData)() ?? {}, comments = actionComment || ticket?.comments || [];
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_jsx_runtime75.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_Box18.default, { sx: { my: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_Typography24.default, { variant: "body1", color: "initial", children: [
      "Support Ticket - ",
      ticket?.module
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_Box18.default, { sx: { width: "100%", display: "flex" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_Stack4.default, { sx: { width: "60%", pr: 2 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(TicketDescription_default, { description: ticket?.description }),
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(TicketComments_default, { comments })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_Stack4.default, { sx: { width: "40%" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
          TicketInformation_default,
          {
            info: {
              date: ticket?.created?.at?.toString(),
              addedBy: ticket?.created?.by?.toString(),
              module: ticket?.module
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(TicketLogs_default, { logs: ticket?.logs })
      ] })
    ] })
  ] });
}

// app/routes/user.traces.list.$pageNo.$id.tsx
var user_traces_list_pageNo_id_exports = {};
__export(user_traces_list_pageNo_id_exports, {
  action: () => action14,
  default: () => CustomerTracesView,
  loader: () => loader17
});
var import_node20 = require("@remix-run/node"), import_react52 = require("@remix-run/react");

// app/components/Loader.tsx
var import_Box19 = __toESM(require("@mui/material/Box")), import_Typography25 = __toESM(require("@mui/material/Typography")), import_CircularProgress2 = __toESM(require("@mui/material/CircularProgress")), import_jsx_runtime76 = require("react/jsx-runtime"), Loader = ({ displayText, height, width }) => /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(
  import_Box19.default,
  {
    sx: {
      p: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // make full height
      height: height ?? "calc(100vh - 64px)",
      // make full width
      width: width ?? "calc(100vw - 220px)",
      // make background white
      backgroundColor: "background.dense"
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_CircularProgress2.default, { size: 36 }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
        import_Typography25.default,
        {
          style: {
            marginLeft: "1rem",
            fontSize: "20px",
            display: "inline",
            textAlign: "center",
            color: "text.primary"
          },
          children: displayText
        }
      )
    ]
  }
), Loader_default = Loader;

// app/components/customers/traces/SubTableContent/index.tsx
var import_react50 = require("react"), import_react51 = require("@remix-run/react"), import_IconButton4 = __toESM(require("@mui/material/IconButton")), import_Table6 = __toESM(require("@mui/material/Table")), import_TableBody7 = __toESM(require("@mui/material/TableBody")), import_TableCell7 = __toESM(require("@mui/material/TableCell")), import_TableHead3 = __toESM(require("@mui/material/TableHead")), import_TableRow7 = __toESM(require("@mui/material/TableRow")), import_Typography27 = __toESM(require("@mui/material/Typography")), import_Replay = __toESM(require("@mui/icons-material/Replay"));

// app/components/customers/traces/SubTableContent/StatusLogs.tsx
var import_Box20 = __toESM(require("@mui/material/Box")), import_Typography26 = __toESM(require("@mui/material/Typography")), import_Close2 = __toESM(require("@mui/icons-material/Close"));
var import_jsx_runtime77 = require("react/jsx-runtime"), StatusLogs = ({ index, functionList }) => /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Box20.default, { sx: { minWidth: 1, display: "flex", flexDirection: "column", placeItems: "center", height: 50 }, children: functionList[index]?.status === "COMPLETED" /* COMPLETED */ ? /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(import_jsx_runtime77.Fragment, { children: [
  functionList?.[index - 1]?.status === "FAILED" /* FAILED */ ? /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Close2.default, { color: "error", sx: { fontSize: 16 } }) : /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Box20.default, { sx: { border: index !== 0 ? 1 : 0, borderColor: "gray", height: "100%", width: 0 } }),
  /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
    import_Typography26.default,
    {
      variant: "body2",
      sx: {
        fontSize: 12,
        textAlign: "center",
        width: "100%",
        color: "green",
        border: "1px solid green",
        py: "2px",
        px: "12px",
        borderRadius: 2
      },
      color: "initial",
      children: "Completed"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Box20.default, { sx: { bgcolor: "gold", border: functionList.length - 1 !== index ? 1 : 0, borderColor: "gray", height: "100%", width: 0 } })
] }) : functionList[index]?.status === "FAILED" /* FAILED */ ? /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(import_jsx_runtime77.Fragment, { children: [
  functionList?.[index - 1]?.status === "FAILED" /* FAILED */ ? /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Close2.default, { color: "error", sx: { fontSize: 16 } }) : /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Box20.default, { sx: { bgcolor: "gold", border: 1, borderColor: "gray", height: "100%", width: 0 } }),
  /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
    import_Typography26.default,
    {
      variant: "body2",
      sx: {
        fontSize: 12,
        textAlign: "center",
        width: "100%",
        color: "tomato",
        //"#ff7c7c",
        border: "1px solid tomato",
        //#ff7c7c",
        py: "2px",
        px: "12px",
        borderRadius: 2
      },
      color: "initial",
      children: "Failed"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Box20.default, { sx: { bgcolor: "gold", border: functionList.length - 1 !== index ? 1 : 0, height: "100%", width: 0, borderStyle: "dashed" } })
] }) : functionList[index]?.status === "PENDING" /* PENDING */ ? /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(import_jsx_runtime77.Fragment, { children: [
  functionList?.[index - 1]?.status === "FAILED" /* FAILED */ ? /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Close2.default, { color: "error", sx: { fontSize: 16 } }) : functionList?.[index - 1]?.status === "COMPLETED" /* COMPLETED */ ? /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Box20.default, { sx: { border: 1, borderColor: "gray", height: "100%", width: 0 } }) : /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Box20.default, { sx: { border: 0, borderColor: "gray", height: "100%", width: 0, borderStyle: "dashed" } }),
  /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
    import_Typography26.default,
    {
      variant: "body2",
      sx: {
        fontSize: 12,
        textAlign: "center",
        width: "100%",
        color: "gray",
        //"#d3d3d3",
        border: "1px solid gray",
        //#d3d3d3",
        py: "2px",
        px: "12px",
        borderRadius: 2
      },
      color: "initial",
      children: "Pending"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Box20.default, { sx: { bgcolor: "gold", border: 0, borderColor: "gray", height: "100%", width: 0, borderStyle: "dashed" } })
] }) : /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(import_jsx_runtime77.Fragment, { children: [
  functionList?.[index - 1]?.status === "FAILED" /* FAILED */ ? /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Close2.default, { color: "error", sx: { fontSize: 16 } }) : /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Box20.default, { sx: { border: 1, borderColor: "gray", height: "100%", width: 0 } }),
  /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
    import_Typography26.default,
    {
      variant: "body2",
      sx: {
        fontSize: 12,
        textAlign: "center",
        width: "100%",
        color: "orange",
        //"#d3d3d3",
        border: "1px solid orange",
        //#d3d3d3",
        py: "2px",
        px: "12px",
        borderRadius: 2
      },
      color: "initial",
      children: "Initiated"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_Box20.default, { sx: { bgcolor: "gold", border: 0, borderColor: "gray", height: "100%", width: 0, borderStyle: "dashed" } })
] }) }), StatusLogs_default = StatusLogs;

// app/components/customers/traces/SubTableContent/index.tsx
var import_jsx_runtime78 = require("react/jsx-runtime"), SubTableContent = ({ traceId, functionList }) => {
  let navigate = (0, import_react51.useNavigate)(), fetch2 = (0, import_react51.useFetcher)(), { status: status2, message, list } = fetch2?.data ?? {}, finalFuncList = list || functionList || [];
  (0, import_react50.useEffect)(() => {
    status2 === "success" && console.log(message);
  }, [status2]);
  let onRestartFunction = (functionObj) => {
    fetch2.submit(
      { functionId: functionObj?.functionId },
      { method: "POST", action: "." }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(import_jsx_runtime78.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_Typography27.default, { variant: "h6", color: "initial", children: "Processes" }),
    /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(import_Table6.default, { size: "small", "aria-label": "purchases", children: [
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableHead3.default, { children: /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(import_TableRow7.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { borderBottom: "none" } }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { borderBottom: "none" } }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { borderBottom: "2px solid #a7a7a7" }, children: "Function" }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { borderBottom: "2px solid #a7a7a7" }, align: "center", children: "Function ID" }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { borderBottom: "2px solid #a7a7a7" }, align: "center", children: "Created" }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { borderBottom: "2px solid #a7a7a7" }, align: "center", children: "Updated" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableBody7.default, { children: finalFuncList?.map?.((fun, index) => /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(import_TableRow7.default, { sx: rowStyle, children: [
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { ...cellStyle5, borderBottom: "none", width: 0, pl: 2, pr: 1 }, component: "th", scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
          StatusLogs_default,
          {
            index,
            functionList: finalFuncList
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { ...cellStyle5, borderBottom: "none", width: 0, pr: 2, pl: 0 }, component: "th", scope: "row", children: finalFuncList?.[index]?.status === "FAILED" /* FAILED */ && (!finalFuncList?.[index + 1] || finalFuncList?.[index + 1]?.status === "PENDING" /* PENDING */) && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_IconButton4.default, { sx: { boxShadow: 2, p: "4px" }, onClick: () => onRestartFunction(fun), children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_Replay.default, { sx: { fontSize: 25, color: "primary.main", transform: "scalex(-1)" } }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { ...cellStyle5 }, component: "th", scope: "row", children: fun?.name }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { ...cellStyle5 }, align: "center", children: fun?.functionId }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { ...cellStyle5 }, align: "center", children: fun?.created?.at ? utcToDubaiTime(fun?.created?.at, "MMM DD, YYYY : HH:MM") : "" }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_TableCell7.default, { sx: { ...cellStyle5 }, align: "center", children: fun?.updated?.at ? utcToDubaiTime(fun?.updated?.at, "MMM DD, YYYY : HH:MM") : "" })
      ] }, fun?.functionId)) })
    ] })
  ] });
}, SubTableContent_default = SubTableContent, cellStyle5 = {
  py: 0
}, rowStyle = {
  "&:hover": { backgroundColor: "background.light" }
};

// app/models/traces/getFuntionsOfTracePromise.server.ts
async function getFunctionsOfTracePromise(request, _id) {
  try {
    let dbName = (await getSession(request))?.data?.companyDb, trace = await mongodb.db(dbName).collection("traces").findOne({ _id });
    if (!trace)
      throw new Error("trace not found");
    let functions = trace?.functions, count = functions?.length || 0;
    return {
      result: functions,
      count
    };
  } catch (err) {
    return console.error(err), {
      result: [],
      count: 0,
      error: err
    };
  }
}

// app/routes/user.traces.list.$pageNo.$id.tsx
var import_jsx_runtime79 = require("react/jsx-runtime"), tracesData = [
  {
    traceId: "TRACE00002",
    workflowCode: "WORK740021",
    status: "PENDING" /* PENDING */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "PENDING" /* PENDING */
        // created: new Date().toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "PENDING" /* PENDING */
        // created: new Date().toDateString()
      }
    ]
  },
  {
    traceId: "TRACE00011",
    workflowCode: "WORK740021",
    status: "COMPLETED" /* COMPLETED */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN00041",
        functionName: "Process 4",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      }
    ]
  },
  {
    traceId: "TRACE00001",
    workflowCode: "WORK740021",
    status: "COMPLETED" /* COMPLETED */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      }
    ]
  },
  {
    traceId: "TRACE00003",
    workflowCode: "WORK740021",
    status: "COMPLETED" /* COMPLETED */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      }
    ]
  },
  {
    traceId: "TRACE00004",
    workflowCode: "WORK740021",
    status: "COMPLETED" /* COMPLETED */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      }
    ]
  },
  {
    traceId: "TRACE00005",
    workflowCode: "WORK740021",
    status: "COMPLETED" /* COMPLETED */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      }
    ]
  },
  {
    traceId: "TRACE00006",
    workflowCode: "WORK740021",
    status: "COMPLETED" /* COMPLETED */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      }
    ]
  },
  {
    traceId: "TRACE00007",
    workflowCode: "WORK740021",
    status: "COMPLETED" /* COMPLETED */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      }
    ]
  },
  {
    traceId: "TRACE00008",
    workflowCode: "WORK740021",
    status: "COMPLETED" /* COMPLETED */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      }
    ]
  },
  {
    traceId: "TRACE00009",
    workflowCode: "WORK740021",
    status: "COMPLETED" /* COMPLETED */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      }
    ]
  },
  {
    traceId: "TRACE00010",
    workflowCode: "WORK740021",
    status: "COMPLETED" /* COMPLETED */,
    created: (/* @__PURE__ */ new Date()).toDateString(),
    updated: (/* @__PURE__ */ new Date()).toDateString(),
    functions: [
      {
        functionId: "FUN0001",
        functionName: "Process 1",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0002",
        functionName: "Process 2",
        status: "PENDING" /* PENDING */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0003",
        functionName: "Process 3",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0004",
        functionName: "Process 4",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0005",
        functionName: "Process 5",
        status: "FAILED" /* FAILED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      },
      {
        functionId: "FUN0006",
        functionName: "Process 6",
        status: "COMPLETED" /* COMPLETED */,
        created: (/* @__PURE__ */ new Date()).toDateString()
      }
    ]
  }
], loader17 = async ({ request, params }) => {
  let { id } = params, {
    result: functions,
    count,
    error
  } = await getFunctionsOfTracePromise(request, new ObjectId(id));
  return (0, import_node20.json)({
    functions,
    count
  });
};
async function action14({ request }) {
  let formData = await request.formData(), data3 = Object.fromEntries(formData.entries());
  console.log(data3);
  let list = [
    {
      functionId: "FUN0001",
      functionName: "Process 1",
      status: "COMPLETED" /* COMPLETED */,
      created: (/* @__PURE__ */ new Date()).toDateString()
    },
    {
      functionId: "FUN0002",
      functionName: "Process 2",
      status: "COMPLETED" /* COMPLETED */,
      created: (/* @__PURE__ */ new Date()).toDateString()
    },
    {
      functionId: "FUN0003",
      functionName: "Process 3",
      status: "COMPLETED" /* COMPLETED */,
      created: (/* @__PURE__ */ new Date()).toDateString()
    },
    {
      functionId: "FUN0004",
      functionName: "Process 4",
      status: "FAILED" /* FAILED */,
      created: (/* @__PURE__ */ new Date()).toDateString()
    },
    {
      functionId: "FUN0004",
      functionName: "Process 4",
      status: "INITIALED" /* INITIALED */,
      created: (/* @__PURE__ */ new Date()).toDateString()
    },
    {
      functionId: "FUN0005",
      functionName: "Process 5",
      status: "PENDING" /* PENDING */
      // created: new Date().toDateString()
    },
    {
      functionId: "FUN0006",
      functionName: "Process 6",
      status: "PENDING" /* PENDING */
      // created: new Date().toDateString()
    }
  ];
  return (0, import_node20.json)({
    list,
    status: "success",
    message: "Process restarted successfully"
  });
}
function CustomerTracesView() {
  let { id } = (0, import_react52.useParams)(), { functions, count } = (0, import_react52.useLoaderData)(), { state } = (0, import_react52.useNavigation)();
  return state === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    Loader_default,
    {
      displayText: "Loading..."
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    SubTableContent_default,
    {
      functionList: functions,
      traceId: id
    }
  );
}

// app/routes/user.workflows.design._index.tsx
var user_workflows_design_index_exports = {};
__export(user_workflows_design_index_exports, {
  default: () => WorkflowsDesignIndex,
  loader: () => loader18
});
var import_node21 = require("@remix-run/node"), import_react54 = require("@remix-run/react");
var import_RemoveRedEye3 = __toESM(require("@mui/icons-material/RemoveRedEye"));

// app/components/ActiveCell.tsx
var import_Box21 = __toESM(require("@mui/material/Box")), import_Switch2 = __toESM(require("@mui/material/Switch")), import_react53 = require("@remix-run/react"), import_jsx_runtime80 = require("react/jsx-runtime"), ActiveCell = ({ row: { original } }) => {
  let navigate = (0, import_react53.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
    import_Box21.default,
    {
      sx: {
        display: "flex",
        justifyContent: "left",
        alignItems: "center"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
        import_Switch2.default,
        {
          size: "small",
          defaultChecked: !original || !original?.deactivated,
          sx: {
            fontSize: "1rem"
          },
          onClick: () => navigate(original._id + "/activate")
        }
      )
    }
  );
}, ActiveCell_default = ActiveCell;

// app/routes/user.workflows.design._index.tsx
var import_jsx_runtime81 = require("react/jsx-runtime");
async function loader18({ request }) {
  let db = mongodb.db("cross-dock-data");
  return (0, import_node21.json)({
    workflowList: await db.collection("workflows").find().toArray()
    // move to models
  });
}
function WorkflowsDesignIndex() {
  let { workflowList } = (0, import_react54.useLoaderData)(), navigate = (0, import_react54.useNavigate)(), tableProps = {
    headers: [
      { Header: "Workflow ID", accessor: "workflowID" },
      { Header: "Workflow Code", accessor: "code" },
      { Header: "Name", accessor: "name" },
      { Header: "type", accessor: "type" },
      {
        Header: "Active",
        Cell: ActiveCell_default
      }
    ],
    data: workflowList,
    actionButtonList: [
      {
        icon: EditIcon_default,
        onClick: (row) => navigate(row._id + "/edit")
      },
      {
        icon: import_RemoveRedEye3.default,
        onClick: (row) => navigate(row._id)
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_jsx_runtime81.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(ModuleTabTitle_default, { title: "Workflow Design" }) });
}

// app/routes/user.workflows.design.status.tsx
var user_workflows_design_status_exports = {};
__export(user_workflows_design_status_exports, {
  action: () => action15,
  default: () => CustomerWorkflowStatusDesign
});
var import_node22 = require("@remix-run/node"), import_react56 = require("@remix-run/react");

// app/components/customers/forms/CustomerStatusConfigurationForm.tsx
var import_react_hook_form8 = require("react-hook-form"), import_react55 = require("@remix-run/react"), import_Typography28 = __toESM(require("@mui/material/Typography")), import_Grid11 = __toESM(require("@mui/material/Grid")), import_Table7 = __toESM(require("@mui/material/Table")), import_TableBody8 = __toESM(require("@mui/material/TableBody")), import_TableCell8 = __toESM(require("@mui/material/TableCell")), import_TableHead4 = __toESM(require("@mui/material/TableHead")), import_TableRow8 = __toESM(require("@mui/material/TableRow"));
var import_jsx_runtime82 = require("react/jsx-runtime"), CustomerStatusConfigurationFields = ({
  defaultValues,
  statusList
}) => {
  let { register, control, watch } = (0, import_react_hook_form8.useForm)({
    defaultValues
  });
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(import_Grid11.default, { container: !0, spacing: 1, style: { alignItems: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_Grid11.default, { container: !0, children: /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(import_Grid11.default, { item: !0, xs: 12, sm: 12, sx: { display: "flex", placeItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_Typography28.default, { sx: { pr: 4 }, children: "Configuration Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
        SimpleTextField_default,
        {
          register,
          label: "Configuration Name",
          fieldName: "statusConfigName",
          required: !0,
          props: {
            sx: { width: 400, my: 1 }
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_Grid11.default, { container: !0, sx: { mt: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_Grid11.default, { item: !0, xs: 12, sm: 12, children: /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(import_Table7.default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_TableHead4.default, { children: /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(import_TableRow8.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_TableCell8.default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_TableCell8.default, { align: "right" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_TableBody8.default, { children: statusList.map((obj) => /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(import_TableRow8.default, { sx: bodyRowStyle3, children: [
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_TableCell8.default, { sx: bodyCellStyle2, children: obj.name }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_TableCell8.default, { sx: bodyCellStyle2, align: "right", children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
          SimpleTextField_default,
          {
            register,
            fieldName: `${obj.name}`,
            required: !0,
            props: {
              sx: { width: 400, m: 0 }
            }
          }
        ) })
      ] })) })
    ] }) }) })
  ] });
}, CustomerStatusConfigurationForm = ({
  defaultValues,
  statusList,
  editMode = !1
}) => /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(import_react55.Form, { method: "POST", action: ".", children: [
  /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_Grid11.default, { container: !0, spacing: 2, marginTop: 1, children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_Grid11.default, { item: !0, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_Grid11.default, { container: !0, alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
    CustomerStatusConfigurationFields,
    {
      statusList,
      defaultValues
    }
  ) }) }) }),
  /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(SubmitOrSave_default, {})
] }), CustomerStatusConfigurationForm_default = CustomerStatusConfigurationForm, bodyRowStyle3 = {}, bodyCellStyle2 = {
  py: "12px"
};

// app/routes/user.workflows.design.status.tsx
var import_jsx_runtime83 = require("react/jsx-runtime"), action15 = async ({ request }) => {
  let formData = await request.formData(), data3 = Object.fromEntries(formData.entries());
  return (0, import_node22.json)({});
};
function CustomerWorkflowStatusDesign() {
  let actionRes = (0, import_react56.useActionData)() ?? {}, { statusList } = useParentData();
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_jsx_runtime83.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
    Modal_default,
    {
      show: !0,
      modalTitle: "Order Status Configuration",
      closeModal: () => console.log("-----------Close-----------"),
      children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
        CustomerStatusConfigurationForm_default,
        {
          defaultValues: {},
          statusList
        }
      )
    }
  ) });
}

// app/routes/user.workflows.functions.add.tsx
var user_workflows_functions_add_exports = {};
__export(user_workflows_functions_add_exports, {
  action: () => action16,
  default: () => WorkflowFunctionAdd,
  loader: () => loader19
});
var import_node23 = require("@remix-run/node");

// app/components/customers/forms/WorkflowFunctionForm.tsx
var import_react_hook_form9 = require("react-hook-form"), import_react57 = require("@remix-run/react"), import_Typography29 = __toESM(require("@mui/material/Typography")), import_Grid12 = __toESM(require("@mui/material/Grid"));
var import_jsx_runtime84 = require("react/jsx-runtime"), WorkflowFunctionsFormFields = ({
  defaultValues
}) => {
  let { register, control } = (0, import_react_hook_form9.useForm)({
    defaultValues
  });
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(import_Grid12.default, { container: !0, spacing: 1, style: { alignItems: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_Grid12.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_Typography29.default, { children: "Function Name" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_Grid12.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "functionName",
        label: "Function Name",
        required: !0,
        props: {
          placeholder: "e.g. toLowerCase()"
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_Grid12.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_Typography29.default, { children: "Definition" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_Grid12.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "definition",
        label: "Definition",
        rows: 3,
        multiline: !0,
        required: !0,
        props: {
          placeholder: "e.g. (str) => { return str.toLowerCase() }"
        }
      }
    ) })
  ] });
}, WorkflowFunctionForm = ({
  defaultValues,
  editMode = !1
}) => /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(import_react57.Form, { method: "POST", children: [
  /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_Grid12.default, { container: !0, spacing: 2, marginTop: 1, children: /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(import_Grid12.default, { item: !0, xs: 8, children: [
    /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
      FormTitleWithBackButton_default,
      {
        title: "Function",
        editMode
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_Grid12.default, { container: !0, alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
      WorkflowFunctionsFormFields,
      {
        defaultValues
      }
    ) })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(SubmitOrSave_default, {})
] }), WorkflowFunctionForm_default = WorkflowFunctionForm;

// app/routes/user.workflows.functions.add.tsx
var import_jsx_runtime85 = require("react/jsx-runtime");
async function loader19({ request }) {
  return (0, import_node23.json)({});
}
var action16 = async ({ request }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries());
  try {
    return console.log(rawDocument), (0, import_node23.redirect)("../functions");
  } catch (error) {
    return console.error("An error occurred:", error), (0, import_node23.redirect)(".");
  }
};
function WorkflowFunctionAdd() {
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(WorkflowFunctionForm_default, { defaultValues: null });
}

// app/routes/user.workflows.list.$id.edit.tsx
var user_workflows_list_id_edit_exports = {};
__export(user_workflows_list_id_edit_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action17,
  default: () => CustomerWorkflowEdit3,
  loader: () => loader20
});
var import_Typography30 = __toESM(require("@mui/material/Typography")), import_react58 = require("@remix-run/react"), import_node24 = require("@remix-run/node");
var import_react59 = require("react"), import_react_hook_form10 = require("react-hook-form"), import_jsx_runtime86 = require("react/jsx-runtime"), loader20 = async ({ params }) => {
  let { id } = params;
  return (0, import_node24.json)({ workflow: {
    code: "Edit Handling Charges",
    name: "Edit Customer 1",
    description: "Edit Nothing",
    type: "undefined",
    tags: "",
    design: "Edit sdfsdfsd"
  } });
}, action17 = async ({ request, params }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries());
  return {};
};
function CustomerWorkflowEdit3() {
  let { workflow } = (0, import_react58.useLoaderData)(), navigate = (0, import_react58.useNavigate)(), methods = (0, import_react_hook_form10.useForm)({
    defaultValues: workflow
  });
  return console.log(methods.watch()), (0, import_react59.useEffect)(() => {
    navigate("./1");
  }, []), /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
    Outlet2,
    {
      data: {
        methods
      }
    }
  );
}
function ErrorBoundary3() {
  let error = (0, import_react58.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(import_Typography30.default, { variant: "h6", align: "center", children: [
    "An unexpected error occurred: ",
    error.message
  ] }) : (0, import_react58.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_Typography30.default, { children: "Customer Workflow not found!" }) : /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(import_Typography30.default, { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_Typography30.default, { variant: "h6", children: "Unknown Error" });
}

// app/routes/user.customers.$id.activate.tsx
var user_customers_id_activate_exports = {};
__export(user_customers_id_activate_exports, {
  action: () => action18,
  default: () => CustomerEntityActivateModal,
  loader: () => loader21
});
var import_react60 = require("@remix-run/react"), import_node25 = require("@remix-run/node");

// app/models/customers/entities/getCustomerEntityByIdPromise.server.ts
async function getCustomerEntityByIdPromise(entityId) {
  return mongodb.db("cross-dock-data").collection("customerEntities").findOne({ _id: new ObjectId(entityId) });
}

// app/models/customers/entities/activateOrDeactivateEntityPromise.server.ts
async function activateOrDeactivateEntityPromise(idToUpdate, action28, userId) {
  return mongodb.db("cross-dock-data").collection("customerEntities").updateOne(
    { _id: new ObjectId(idToUpdate) },
    {
      $set: {
        deactivated: action28,
        updated: {
          at: /* @__PURE__ */ new Date(),
          by: new ObjectId(userId)
        }
      }
    }
  );
}

// app/routes/user.customers.$id.activate.tsx
var import_jsx_runtime87 = require("react/jsx-runtime");
async function loader21({ request, params }) {
  let { id } = params, customerEntity = await getCustomerEntityByIdPromise(id);
  return (0, import_node25.json)({ customerEntity });
}
async function action18({ request, params }) {
  let { id } = params, userId = await getUserId(request), action28 = (await request.formData()).get("action");
  try {
    return await activateOrDeactivateEntityPromise(
      id,
      action28 !== "activate",
      userId
    ), (0, import_node25.redirect)("../");
  } catch {
    return (0, import_node25.redirect)("");
  }
}
function CustomerEntityActivateModal() {
  let { customerEntity } = (0, import_react60.useLoaderData)(), action28 = customerEntity?.deactivated ? "activate" : "deactivate";
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
    Modal_default,
    {
      show: !0,
      maxWidth: "sm",
      modalTitle: `${customerEntity?.deactivated ? "Activate" : "Deactivate"} Entity`,
      children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
        ConfirmationBox_default,
        {
          action: action28,
          deactivated: customerEntity?.deactivated,
          name: customerEntity?.name
        }
      )
    }
  );
}

// app/routes/user.traces.$id.$functionid.tsx
var user_traces_id_functionid_exports = {};
__export(user_traces_id_functionid_exports, {
  default: () => CustomerFunction
});
var import_jsx_runtime88 = require("react/jsx-runtime");
function CustomerFunction() {
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(Outlet2, {});
}

// app/routes/user.user-management._index.tsx
var user_user_management_index_exports = {};
__export(user_user_management_index_exports, {
  loader: () => loader22
});
var import_node26 = require("@remix-run/node");
function loader22() {
  return (0, import_node26.redirect)("users");
}

// app/routes/user.user-management.groups.tsx
var user_user_management_groups_exports = {};
__export(user_user_management_groups_exports, {
  default: () => CustomersUserTags
});
var import_jsx_runtime89 = require("react/jsx-runtime");
function CustomersUserTags() {
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(Outlet2, {});
}

// app/routes/user.workflows.list._index.tsx
var user_workflows_list_index_exports = {};
__export(user_workflows_list_index_exports, {
  default: () => WorkflowsListIndex2,
  loader: () => loader23
});
var import_node27 = require("@remix-run/node"), import_react61 = require("@remix-run/react");
var import_RemoveRedEye4 = __toESM(require("@mui/icons-material/RemoveRedEye"));

// app/models/customers/workflows/getPermittedWorkflows.ts
var import_mongodb13 = require("mongodb");
async function getPermittedWorkflows(user) {
  try {
    let workflowListQuery = {};
    if (user.type !== "Admin") {
      let permittedCustomers = user?.customerPermissions || [];
      permittedCustomers = permittedCustomers.map((id) => new import_mongodb13.ObjectId(id));
      let customerListQuery = { _id: { $in: permittedCustomers } }, customers = await mongodb.db("cross-dock-data").collection("customerEntities").find(customerListQuery).project({
        workflows: 1
      }).toArray(), workflowIds = [];
      customers.map((cust) => {
        workflowIds = [...workflowIds, ...cust?.workflows];
      }), workflowListQuery = { _id: { $in: workflowIds } };
    }
    return await mongodb.db("cross-dock-data").collection("workflows").find(workflowListQuery).toArray();
  } catch (err) {
    return console.error(err), [];
  }
}

// app/routes/user.workflows.list._index.tsx
var import_jsx_runtime90 = require("react/jsx-runtime");
async function loader23({ request }) {
  let userId = await getUserId(request), user = await getUserById(userId), workflows = await getPermittedWorkflows(user);
  return (0, import_node27.json)({
    workflowList: workflows
  });
}
function WorkflowsListIndex2() {
  let { workflowList } = (0, import_react61.useLoaderData)(), { state } = (0, import_react61.useNavigation)(), navigate = (0, import_react61.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)(import_jsx_runtime90.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(ModuleTabTitle_default, { title: "Workflow List" }),
    /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(ModuleTabButton_default, { text: "Create Workflow", navigateTo: "add", wide: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(AdvancedTable_default, { ...{
      isLoading: state === "loading",
      headers: [
        { Header: "Workflow ID", accessor: "workflowId" },
        { Header: "Workflow Code", accessor: "code" },
        { Header: "Name", accessor: "name" },
        { Header: "type", accessor: "type" },
        {
          Header: "Active",
          Cell: ActiveCell_default
        }
      ],
      data: workflowList,
      actionButtonList: [
        {
          icon: EditIcon_default,
          onClick: (row) => navigate(row._id + "/edit")
        },
        {
          icon: import_RemoveRedEye4.default,
          onClick: (row) => navigate(row._id)
        }
      ]
    } })
  ] });
}

// app/routes/user.support.list._index.tsx
var user_support_list_index_exports = {};
__export(user_support_list_index_exports, {
  default: () => CustomersSupportIndex,
  loader: () => loader24
});
var import_Typography31 = __toESM(require("@mui/material/Typography")), import_RemoveRedEye5 = __toESM(require("@mui/icons-material/RemoveRedEye"));
var import_node28 = require("@remix-run/node"), import_react62 = require("@remix-run/react");
var import_jsx_runtime91 = require("react/jsx-runtime");
async function loader24({ request }) {
  let companyDb = await getCompanyDb(request), db = mongodb.db(companyDb || "cross-dock-data");
  return (0, import_node28.json)({
    customerSupportList: await db.collection("customerSupport").find().toArray()
  });
}
function CustomersSupportIndex() {
  let { customerSupportList } = (0, import_react62.useLoaderData)(), { state } = (0, import_react62.useNavigation)(), navigate = (0, import_react62.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)(import_jsx_runtime91.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(ModuleTabTitle_default, { title: "Customer Support" }),
    /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(ModuleTabButton_default, { text: "Create Ticket", navigateTo: "add" }),
    /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(AdvancedTable_default, { ...{
      isLoading: state === "loading",
      headers: [
        { Header: "Ticket Module", accessor: "module" },
        {
          Header: "Creation time",
          Cell: ({ row: { original } }) => {
            let date = original?.created?.at;
            return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
              import_Typography31.default,
              {
                component: "span",
                style: {
                  display: "flex",
                  fontSize: "12px",
                  alignItems: "center"
                },
                children: showReadableTime_default(date)
              }
            );
          }
        },
        {
          Header: "Status",
          accessor: "status"
        }
      ],
      data: customerSupportList,
      actionButtonList: [
        {
          icon: import_RemoveRedEye5.default,
          onClick: (row) => navigate(row._id)
        }
      ]
    } })
  ] });
}

// app/routes/user.traces.list.$pageNo.tsx
var user_traces_list_pageNo_exports = {};
__export(user_traces_list_pageNo_exports, {
  default: () => TracesListPage,
  loader: () => loader25
});
var import_node29 = require("@remix-run/node"), import_react65 = require("@remix-run/react"), import_Typography33 = __toESM(require("@mui/material/Typography")), import_RemoveRedEye6 = __toESM(require("@mui/icons-material/RemoveRedEye"));

// app/components/AdvancedTableWithAccordion/AdvancedTable.tsx
var import_react64 = require("react"), import_Paper2 = __toESM(require("@mui/material/Paper")), import_react_table2 = require("react-table"), import_TableContainer2 = __toESM(require("@mui/material/TableContainer"));

// app/components/AdvancedTableWithAccordion/DataTable.tsx
var import_Table8 = __toESM(require("@mui/material/Table")), import_TableRow9 = __toESM(require("@mui/material/TableRow")), import_TableBody9 = __toESM(require("@mui/material/TableBody")), import_TableCell9 = __toESM(require("@mui/material/TableCell")), import_TableHead5 = __toESM(require("@mui/material/TableHead")), import_Typography32 = __toESM(require("@mui/material/Typography")), import_TableSortLabel2 = __toESM(require("@mui/material/TableSortLabel")), import_KeyboardArrowDown = __toESM(require("@mui/icons-material/KeyboardArrowDown")), import_KeyboardArrowUp = __toESM(require("@mui/icons-material/KeyboardArrowUp"));
var import_material14 = require("@mui/material"), import_react63 = __toESM(require("react")), import_jsx_runtime92 = require("react/jsx-runtime"), DataTable2 = ({
  page,
  data: data3,
  isLoading,
  enableTags,
  customRows,
  prepareRow,
  onCellClick,
  headerGroups,
  globalFilter,
  getTableProps,
  disableSorting,
  actionButtonList
}) => {
  let showActionButtons = enableTags?.onTagClick || actionButtonList?.length > 0, colSpan = headerGroups[0]?.headers?.length + (showActionButtons ? 1 : 0), handleCellClick = (cellValue, colIndex) => onCellClick && onCellClick(cellValue, colIndex), ActionHeader = () => /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_TableCell9.default, { sx: { p: "0 12px", textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_Typography32.default, { sx: headerCellStyle2, children: "Actions" }) }), ActionButtons = ({ row }) => {
    let isTagbuttonDisabled = row?.original?.actionButtonDisabled?.includes("tags"), isTagButtonInvisible = row?.original?.actionButtonInvisible?.includes("tags");
    return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(import_TableCell9.default, { sx: { textAlign: "left" }, children: [
      enableTags?.onTagClick && !isTagButtonInvisible && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
        AddTagIcon_default,
        {
          onClick: () => enableTags?.onTagClick(row?.original),
          sx: {
            ...iconStyle2,
            opacity: isTagbuttonDisabled && 0.25,
            pointerEvents: isTagbuttonDisabled && "none"
          }
        }
      ),
      actionButtonList?.map((item, key) => {
        let isButtonDisabled = row?.original?.actionButtonDisabled?.includes(
          item?.name
        );
        return row?.original?.actionButtonInvisible?.includes(
          item?.name
        ) ? null : /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
          item.icon,
          {
            onClick: () => item.onClick(row?.original),
            sx: {
              ...iconStyle2,
              opacity: isButtonDisabled && 0.25,
              pointerEvents: isButtonDisabled && "none"
            }
          },
          key
        );
      })
    ] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(import_Table8.default, { size: "small", ...getTableProps(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
      import_TableHead5.default,
      {
        style: {
          borderBottom: "2px solid #2AB0C4"
        },
        children: headerGroups.map((headerGroup, index) => /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
          import_TableRow9.default,
          {
            sx: tableStyle3,
            ...headerGroup.getHeaderGroupProps(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                import_TableCell9.default,
                {
                  sx: headerCellStyle2
                },
                ""
              ),
              headerGroup.headers.map(
                (column, index2) => /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
                  import_TableCell9.default,
                  {
                    sx: headerCellStyle2,
                    ...column.id === "selection" ? column.getHeaderProps() : column.getHeaderProps(
                      column.getSortByToggleProps()
                    ),
                    children: [
                      column.render("Header"),
                      !disableSorting && column.id !== "selection" && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                        import_TableSortLabel2.default,
                        {
                          active: column.isSorted,
                          direction: column.isSortedDesc ? "desc" : "asc"
                        }
                      )
                    ]
                  },
                  index2.toString()
                )
              ),
              showActionButtons && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(ActionHeader, {})
            ]
          },
          index.toString()
        ))
      }
    ),
    !isLoading && data3?.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_TableBody9.default, { sx: tableStyle3, children: customRows && !globalFilter ? customRows : page.map((row, index) => {
      prepareRow(row);
      let open = !!row?.original?.isOpen;
      return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(import_react63.default.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
          import_TableRow9.default,
          {
            sx: bodyRowStyle4,
            ...row.getRowProps(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                import_TableCell9.default,
                {
                  sx: bodyCellStyle3,
                  children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                    import_material14.IconButton,
                    {
                      "aria-label": "expand row",
                      size: "small",
                      onClick: () => {
                        row?.original?.onClick();
                      },
                      children: open ? /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_KeyboardArrowUp.default, {}) : /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_KeyboardArrowDown.default, {})
                    }
                  )
                },
                "dropdown"
              ),
              row.cells.map(
                (cell, index2) => {
                  let rowTagData = row?.original?.tags, showTagsInRow = index2 === 0 && enableTags?.tagsList && rowTagData?.length > 0 && enableTags?.displayTagsInRows;
                  return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
                    import_TableCell9.default,
                    {
                      sx: bodyCellStyle3,
                      ...cell.getCellProps(),
                      onClick: () => handleCellClick(
                        cell.value,
                        index2
                      ),
                      children: [
                        showTagsInRow && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                          TagsIcon_default,
                          {
                            onClick: () => enableTags?.onTagClick(
                              row?.original
                            ),
                            sx: {
                              ...tagsIconStyle2
                              // color: getTagColor(
                              // 	rowTagData?.[0],
                              // 	enableTags?.tagsList,
                              // ),
                            }
                          }
                        ),
                        cell.render("Cell")
                      ]
                    },
                    String(index2)
                  );
                }
              ),
              showActionButtons && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(ActionButtons, { row })
            ]
          },
          String(index) + "-head"
        ),
        /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
          import_TableRow9.default,
          {
            sx: { ...bodyRowStyle4, ":hover": { bgcolor: "transparent" } },
            ...row.getRowProps(),
            children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
              import_TableCell9.default,
              {
                sx: { ...bodyCellStyle3, ...open ? { borderBottom: "2px solid blue" } : {} },
                colSpan: row?.cells?.length + (showActionButtons ? 2 : 1),
                children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                  import_material14.Collapse,
                  {
                    in: open,
                    timeout: "auto",
                    unmountOnExit: !0,
                    children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_material14.Box, { sx: { my: 5, mx: 1 }, children: row?.original?.subContent })
                  }
                )
              }
            )
          },
          String(index) + "-dropdown"
        )
      ] }, String(index));
    }) }) : !isLoading && data3?.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
      TableLoader_default,
      {
        spinner: !1,
        colSpan,
        displayText: "No data to display"
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
      TableLoader_default,
      {
        spinner: !0,
        colSpan,
        displayText: "Loading..."
      }
    )
  ] });
}, tableStyle3 = {
  "&:last-child td, &:last-child th": {
    border: "0 px solid #636161"
  },
  // round corners
  borderRadius: "5px 5px 5px 5px"
}, headerCellStyle2 = {
  p: "0 7px",
  fontSize: "11px",
  fontWeight: "medium",
  textTransform: "uppercase",
  fontFamily: "sans-serif"
}, bodyRowStyle4 = {
  "&:hover": { backgroundColor: "background.light" },
  fontFamily: "sans-serif"
}, bodyCellStyle3 = {
  p: "0 7px",
  fontSize: "12px",
  maxWidth: "350px",
  position: "relative",
  fontFamily: "sans-serif"
}, iconStyle2 = { mr: "5px", fontSize: "14px", cursor: "pointer" }, tagsIconStyle2 = {
  top: 2,
  left: -14.5,
  fontSize: "18px",
  position: "absolute",
  transform: "rotate(90deg)"
}, DataTable_default2 = DataTable2;

// app/components/AdvancedTableWithAccordion/AdvancedTable.tsx
var import_jsx_runtime93 = require("react/jsx-runtime"), AdvancedTable2 = ({
  isLoading = !1,
  data: data3,
  headers,
  ...restProps
}) => {
  let [columns, setColumns] = (0, import_react64.useState)(() => headers), rowData = (0, import_react64.useMemo)(() => data3 || [], [data3]), columnData = (0, import_react64.useMemo)(() => headers || [], [headers]), {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize: pageSize2, globalFilter }
  } = (0, import_react_table2.useTable)(
    {
      data: rowData,
      columns: columnData || columns,
      initialState: { pageSize: restProps?.pageSize || 10 }
    },
    import_react_table2.useGlobalFilter,
    import_react_table2.useSortBy,
    import_react_table2.usePagination
  ), props = {
    data: rowData,
    columns: columnData || columns,
    isLoading,
    globalFilter,
    setGlobalFilter,
    preGlobalFilteredRows,
    title: restProps.title,
    sheetData: restProps.sheetData,
    enableSearchRows: restProps.enableSearchRows
  }, paginationProps = {
    totalRows: restProps?.totalRows,
    pageSize: restProps?.pageSize,
    gotoPage: restProps?.gotoPage,
    pageIndex: restProps?.pageIndex
  }, filterHeaderProps = {
    setColumns,
    disabledHeaders: restProps.disabledHeaders,
    headers
  }, tableProps = {
    page,
    isLoading,
    prepareRow,
    headerGroups,
    getTableProps,
    data: rowData,
    globalFilter,
    ...restProps
  };
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)(
    import_TableContainer2.default,
    {
      elevation: 3,
      component: import_Paper2.default,
      sx: {
        borderRadius: 0,
        padding: "0 24px",
        backgroundColor: "table.background",
        marginTop: 2
      },
      children: [
        restProps.displayToolbar && /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
          TableToolbar_default,
          {
            enableHeaderFilter: !1,
            ...props,
            ...filterHeaderProps
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(DataTable_default2, { ...tableProps }),
        !restProps.enablePagination && /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("br", {}),
        restProps.enablePagination && /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
          TablePagination_default,
          {
            ...paginationProps
          }
        )
      ]
    }
  );
};
AdvancedTable2.defaultProps = {
  displayToolbar: !0,
  enablePagination: !0,
  enableSearchRows: !0
};
var AdvancedTable_default2 = AdvancedTable2;

// app/models/traces/getTraceListPromise.server.ts
async function getTraceListPromise(request, pageNumber = 1, pageSize2 = 10) {
  try {
    let dbName = (await getSession(request))?.data?.companyDb, collection = mongodb.db(dbName).collection("traces"), skip = (pageNumber - 1) * pageSize2, traces = await collection.find().skip(skip).limit(pageSize2).toArray(), count = await collection.countDocuments();
    return {
      result: traces,
      count
    };
  } catch (err) {
    return console.error(err), {
      result: [],
      count: 0,
      error: err
    };
  }
}

// app/routes/user.traces.list.$pageNo.tsx
var import_jsx_runtime94 = require("react/jsx-runtime"), pageSize = 10;
async function loader25({ request, params }) {
  let { pageNo } = params, {
    result: traces,
    count,
    error
  } = await getTraceListPromise(request, Number(pageNo), pageSize);
  return (0, import_node29.json)({
    traceList: traces,
    count
  });
}
function TracesListPage() {
  let navigate = (0, import_react65.useNavigate)(), { traceList, count } = (0, import_react65.useLoaderData)(), { pageNo, id } = (0, import_react65.useParams)(), newList = traceList.map((obj) => ({
    ...obj,
    onClick: () => onDropDownClick(obj),
    isOpen: id === obj._id,
    subContent: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Outlet2, {})
  })), chagePage = (index) => {
    navigate(`../${index + 1}`);
  }, onDropDownClick = (obj) => {
    id !== obj?._id ? navigate(`${obj?._id}`) : navigate("");
  }, onView = (row) => {
    navigate(`../../${row?._id}`);
  }, tableHeaders = [
    { Header: "Trace ID", accessor: "traceId" },
    { Header: "Workflow Code", accessor: "workflow.name" },
    { Header: "Status", accessor: "status" },
    {
      Header: "Created",
      Cell: ({ row: { original } }) => {
        let date = original?.created?.at;
        return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
          import_Typography33.default,
          {
            component: "span",
            style: {
              display: "flex",
              fontSize: "12px",
              alignItems: "center"
            },
            children: date
          }
        );
      }
    },
    {
      Header: "Updated",
      Cell: ({ row: { original } }) => {
        let date = original?.updated.at;
        return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
          import_Typography33.default,
          {
            component: "span",
            style: {
              padding: "2px",
              display: "flex",
              fontSize: "12px",
              alignItems: "center"
            },
            children: date
          }
        );
      }
    }
    // {
    //     Header: "Errors",
    //     accessor: "errors",
    // },
  ], tableProps = {
    ...{
      totalRows: count,
      pageSize,
      pageIndex: Number(pageNo) - 1,
      // Table starts with 0
      gotoPage: chagePage
    },
    // isLoading: state === "loading",
    headers: tableHeaders,
    data: newList,
    actionButtonList: [
      { icon: import_RemoveRedEye6.default, onClick: onView }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(import_jsx_runtime94.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(ModuleTabTitle_default, { title: "Customer Traces" }),
    /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(AdvancedTable_default2, { ...tableProps })
  ] });
}

// app/routes/user.workflows.list.$vid.tsx
var user_workflows_list_vid_exports = {};
__export(user_workflows_list_vid_exports, {
  default: () => CustomerWorkflowView
});
var import_jsx_runtime95 = require("react/jsx-runtime");
function CustomerWorkflowView() {
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Outlet2, {});
}

// app/routes/user.analytics.customer.tsx
var user_analytics_customer_exports = {};
__export(user_analytics_customer_exports, {
  default: () => FeroAnalyticsCustomer
});
var import_jsx_runtime96 = require("react/jsx-runtime");
function FeroAnalyticsCustomer() {
  return /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(Outlet2, {});
}

// app/routes/user.analytics.workflow.tsx
var user_analytics_workflow_exports = {};
__export(user_analytics_workflow_exports, {
  default: () => FeroAnalyticsWorkflow2
});
var import_jsx_runtime97 = require("react/jsx-runtime");
function FeroAnalyticsWorkflow2() {
  return /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(Outlet2, {});
}

// app/routes/user.customers.$id.edit.tsx
var user_customers_id_edit_exports = {};
__export(user_customers_id_edit_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action19,
  default: () => CustomerEntityEdit,
  loader: () => loader26
});
var import_Typography35 = __toESM(require("@mui/material/Typography")), import_react67 = require("@remix-run/react"), import_node31 = require("@remix-run/node");

// app/components/customers/forms/CustomerEntityForm.tsx
var import_react_hook_form11 = require("react-hook-form"), import_react66 = require("@remix-run/react"), import_Typography34 = __toESM(require("@mui/material/Typography")), import_Grid13 = __toESM(require("@mui/material/Grid"));
var import_jsx_runtime98 = require("react/jsx-runtime"), CustomerEntityFormFields = ({
  defaultValues,
  tagList,
  workflowList
}) => {
  let { register, control, watch } = (0, import_react_hook_form11.useForm)({
    defaultValues
  });
  console.log(watch());
  let customWorkflowlist = workflowList.map((o) => ({
    label: o?.name,
    value: o?._id
  })), customTagList = tagList.map((o) => ({
    label: o?.name,
    value: o?._id
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_Grid13.default, { container: !0, spacing: 1, style: { alignItems: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Typography34.default, { children: "Entity Code" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "code",
        label: "Entity Code",
        required: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Typography34.default, { children: "Name" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "name",
        label: "Name",
        required: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Typography34.default, { children: "Description" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "description",
        label: "Description",
        required: !0,
        rows: 2,
        multiline: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Typography34.default, { children: "Tags" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
      MultiSelectField_default,
      {
        fieldName: "tags",
        label: "Tags",
        defaultValue: defaultValues?.tags,
        control,
        itemList: customTagList
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Typography34.default, { children: "Workflow" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
      MultiSelectField_default,
      {
        fieldName: "workflows",
        label: "Workflows",
        itemList: customWorkflowlist,
        defaultValue: defaultValues?.workflows,
        control
      }
    ) })
  ] });
}, CustomerEntityForm = ({
  defaultValues,
  editMode = !1,
  tagList,
  workflowList
}) => /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_react66.Form, { method: "POST", children: [
  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { container: !0, spacing: 2, marginTop: 1, children: /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_Grid13.default, { item: !0, xs: 8, children: [
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
      FormTitleWithBackButton_default,
      {
        title: "Customer",
        editMode
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_Grid13.default, { container: !0, alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
      CustomerEntityFormFields,
      {
        defaultValues,
        tagList,
        workflowList
      }
    ) })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(SubmitOrSave_default, {})
] }), CustomerEntityForm_default = CustomerEntityForm;

// app/models/customers/workflows/getAllWorkflowsPromise.server.ts
async function getAllWorkflowsPromise() {
  return mongodb.db("cross-dock-data").collection("workflows").find({}).toArray();
}

// app/models/customers/entities/updateCustomerEntityPromise.server.ts
var import_node30 = require("@remix-run/node"), import_mongodb15 = require("mongodb");

// app/utils/zod/customers/customerEntityDBSchema.ts
var import_zod9 = require("zod");

// app/utils/zod/transformers/transformMultiselectObjectId.ts
var import_zod8 = require("zod"), import_mongodb14 = require("mongodb"), transformMultiselectObjectId_default = import_zod8.z.string().refine(
  (value) => {
    if (typeof value == "string" && value !== "") {
      let split = value.split(",");
      for (let item of split)
        if (!import_mongodb14.ObjectId.isValid(item.trim()))
          return !1;
      return !0;
    } else
      return value === "" || value === null || value === void 0;
  },
  {
    message: "Invalid ObjectId. Check list of tags."
  }
).transform((value) => typeof value == "string" && value !== "" ? value.split(",").map((item) => new import_mongodb14.ObjectId(item)) : value === "" || value === null || value === void 0 ? [] : value);

// app/utils/zod/customers/customerEntityDBSchema.ts
var customerEntityDBSchema = import_zod9.z.object({
  _id: transformObjectId_default.optional(),
  code: import_zod9.z.string(),
  name: import_zod9.z.string(),
  description: import_zod9.z.string().optional(),
  tags: transformMultiselectObjectId_default.optional(),
  // it is a multi-select field (will be stored as an array of ids)
  workflows: transformMultiselectObjectId_default.optional(),
  // it is a multi-select field (will be stored as an array of ids)
  deactivated: import_zod9.z.boolean().default(!0),
  created: import_zod9.z.object({
    by: transformObjectId_default,
    at: import_zod9.z.date()
  }),
  updated: import_zod9.z.object({
    by: transformObjectId_default.optional(),
    at: import_zod9.z.date().optional()
  }).optional()
}), customerEntityDBSchema_default = customerEntityDBSchema;

// app/models/customers/entities/updateCustomerEntityPromise.server.ts
async function updateCustomerEntityPromise(rawDocument, entityId, userId) {
  try {
    let existingCustomerEntity = await getCustomerEntityByIdPromise(
      entityId
    ), parsedDocument = customerEntityDBSchema_default.parse({
      ...existingCustomerEntity,
      ...rawDocument,
      updated: { at: /* @__PURE__ */ new Date(), by: new import_mongodb15.ObjectId(userId) }
    }), db = mongodb.db("cross-dock-data"), { modifiedCount } = await db.collection("customerEntities").updateOne(
      { _id: new import_mongodb15.ObjectId(entityId) },
      { $set: parsedDocument }
    );
    if (!modifiedCount)
      throw new Error("Failed to update entity");
    return (0, import_node30.redirect)("../");
  } catch (err) {
    return console.error(err), (0, import_node30.json)({ error: err.message }, { status: 500 });
  }
}

// app/routes/user.customers.$id.edit.tsx
var import_jsx_runtime99 = require("react/jsx-runtime"), loader26 = async ({ params }) => {
  let tagList = [], workflowList = await getAllWorkflowsPromise(), customerEntity = await getCustomerEntityByIdPromise(
    params?.id
  );
  return (0, import_node31.json)({
    customerEntity,
    tagList,
    workflowList
  });
}, action19 = async ({ request, params }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(
    formData.entries()
  ), userId = await getUserId(request);
  return await updateCustomerEntityPromise(
    rawDocument,
    params?.id,
    userId
  );
};
function CustomerEntityEdit() {
  let { customerEntity, tagList, workflowList } = (0, import_react67.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
    CustomerEntityForm_default,
    {
      defaultValues: customerEntity,
      tagList,
      workflowList
    }
  );
}
function ErrorBoundary4() {
  let error = (0, import_react67.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)(import_Typography35.default, { variant: "h6", align: "center", children: [
    "An unexpected error occurred: ",
    error.message
  ] }) : (0, import_react67.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(import_Typography35.default, { children: "Customer Entity not found!" }) : /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)(import_Typography35.default, { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(import_Typography35.default, { variant: "h6", children: "Unknown Error" });
}

// app/routes/user.orders.list._index.tsx
var user_orders_list_index_exports = {};
__export(user_orders_list_index_exports, {
  default: () => OrdersListPage,
  loader: () => loader27
});
var import_Typography36 = __toESM(require("@mui/material/Typography")), import_RemoveRedEye7 = __toESM(require("@mui/icons-material/RemoveRedEye"));
var import_node32 = require("@remix-run/node"), import_react68 = require("@remix-run/react");
var import_jsx_runtime100 = require("react/jsx-runtime");
async function loader27() {
  let db = mongodb.db("cross-dock-data");
  return (0, import_node32.json)({
    orders: await db.collection("orders").find().toArray()
  });
}
function OrdersListPage() {
  let { orders } = (0, import_react68.useLoaderData)(), { state } = (0, import_react68.useNavigation)(), navigate = (0, import_react68.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(import_jsx_runtime100.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(ModuleTabTitle_default, { title: "Orders" }),
    /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(AdvancedTable_default, { ...{
      isLoading: state === "loading",
      headers: [
        { Header: "Order Number", accessor: "orderNumber" },
        { Header: "Status", accessor: "status" },
        {
          Header: "Created At",
          Cell: ({ row: { original } }) => {
            let date = original?.created?.at;
            return /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
              import_Typography36.default,
              {
                component: "span",
                style: {
                  display: "flex",
                  fontSize: "12px",
                  alignItems: "center"
                },
                children: showReadableTime_default(date)
              }
            );
          }
        }
      ],
      data: orders,
      actionButtonList: [
        {
          icon: import_RemoveRedEye7.default,
          onClick: (row) => navigate(row._id)
        }
      ]
    } })
  ] });
}

// app/routes/user.track-trace._index.tsx
var user_track_trace_index_exports = {};
__export(user_track_trace_index_exports, {
  action: () => action20,
  default: () => TrackAndTracePage
});
var import_react_hook_form12 = require("react-hook-form"), import_node33 = require("@remix-run/node"), import_react69 = require("@remix-run/react"), import_Box23 = __toESM(require("@mui/material/Box")), import_Button11 = __toESM(require("@mui/material/Button"));

// app/components/customers/traces/LogsComponent.tsx
var import_Timeline2 = __toESM(require("@mui/lab/Timeline")), import_TimelineConnector2 = __toESM(require("@mui/lab/TimelineConnector")), import_TimelineContent2 = __toESM(require("@mui/lab/TimelineContent")), import_TimelineDot2 = __toESM(require("@mui/lab/TimelineDot")), import_TimelineItem2 = __toESM(require("@mui/lab/TimelineItem")), import_TimelineSeparator2 = __toESM(require("@mui/lab/TimelineSeparator")), import_Box22 = __toESM(require("@mui/material/Box")), import_Typography37 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime101 = require("react/jsx-runtime"), Logs = ({ logs: logs2 }) => /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_Box22.default, { sx: {}, children: /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_Box22.default, { sx: { overflowY: "auto", height: 500 }, children: [
  /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
    import_Typography37.default,
    {
      variant: "body1",
      sx: {
        py: 1,
        px: 2,
        bgcolor: "#dbdbdb"
      },
      children: "Logs"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
    import_Timeline2.default,
    {
      sx: {
        [`& .${import_TimelineItem2.timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0
        }
      },
      children: logs2.map((log) => /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_TimelineItem2.default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_TimelineSeparator2.default, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_TimelineDot2.default, { color: log?.level }),
          /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_TimelineConnector2.default, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_TimelineContent2.default, { sx: { py: "12px", px: 2 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(
            import_Box22.default,
            {
              sx: {
                display: "flex",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
                  import_Typography37.default,
                  {
                    variant: "body2",
                    sx: { fontSize: 12 },
                    children: utcToDubaiTime(log?.created?.at?.toString(), "MMM DD, YYYY HH:MM")
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_Typography37.default, { variant: "body2", children: log?.name })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_Typography37.default, { sx: { color: "#393939" }, children: log?.detail?.message })
        ] })
      ] }))
    }
  )
] }) }), LogsComponent_default = Logs;

// app/routes/user.track-trace._index.tsx
var import_jsx_runtime102 = require("react/jsx-runtime"), logs = [
  {
    name: "ORDER00001",
    message: "order trip has been started!",
    createdAt: /* @__PURE__ */ new Date(),
    type: "info"
  },
  {
    name: "ORDER00001",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quia tenetur vero illo excepturi aliquid explicabo? Iusto eius sit tempore cupiditate asperiores iure ipsum optio similique maxime, recusandae nemo delectus?",
    createdAt: /* @__PURE__ */ new Date(),
    type: "info"
  },
  {
    name: "ORDER00001",
    message: "Error: Lorem ipsum dolor sit amet.",
    createdAt: /* @__PURE__ */ new Date(),
    type: "error"
  },
  {
    name: "ORDER00001",
    message: "Trip has been rejected for some reason",
    createdAt: /* @__PURE__ */ new Date(),
    type: "warning"
  }
], action20 = ({ request, params }) => {
  let { orderNumber } = params;
  return console.log(orderNumber), (0, import_node33.json)({ logs });
};
function TrackAndTracePage() {
  let { logs: logs2 } = (0, import_react69.useActionData)() ?? {};
  console.log(logs2);
  let { register, watch } = (0, import_react_hook_form12.useForm)();
  console.log(watch());
  let navigation = (0, import_react69.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(import_jsx_runtime102.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_react69.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(import_Box23.default, { sx: { display: "flex", gap: 2 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        SimpleTextField_default,
        {
          register,
          fieldName: "orderNumber",
          label: "Order Number or AWBs",
          required: !0,
          props: {
            sx: { m: 0, width: 400 }
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        import_Button11.default,
        {
          variant: "contained",
          type: "submit",
          sx: { width: 200, color: "white" },
          children: "Search"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_Box23.default, { sx: { mt: 4, border: "1px solid #e5e5e5" }, children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
      LogsComponent_default,
      {
        logs: logs2 || []
      }
    ) })
  ] });
}

// app/routes/user.workflows.list.add.tsx
var user_workflows_list_add_exports = {};
__export(user_workflows_list_add_exports, {
  action: () => action21,
  default: () => CustomerWorkflowAdd4,
  loader: () => loader28
});
var import_react70 = require("react"), import_node34 = require("@remix-run/node"), import_react71 = require("@remix-run/react"), import_react_hook_form13 = require("react-hook-form");

// app/models/customers/workflows/createWorkflowPromise.ts
async function createWorkflowPromise(rawDocument) {
  return new Promise(async (resolve, reject) => {
    try {
      let collection = mongodb.db("cross-dock-data").collection("workflows"), { insertedId } = await collection.insertOne(rawDocument);
      if (!insertedId)
        throw new Error("Failed to insert workdflow");
      resolve({
        result: insertedId
      });
    } catch (err) {
      console.error(err), resolve({
        result: null,
        error: err
      });
    }
  });
}

// app/routes/user.workflows.list.add.tsx
var import_jsx_runtime103 = require("react/jsx-runtime"), loader28 = async () => (0, import_node34.json)({}), action21 = async ({ request }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries());
  try {
    let parseData = JSON.parse(rawDocument?.data), { result, error } = await createWorkflowPromise(parseData);
    return error && new Error(error), (0, import_node34.redirect)("..");
  } catch (error) {
    return console.error(error), (0, import_node34.json)({ error: error?.message }, { status: 400 });
  }
};
function CustomerWorkflowAdd4() {
  let navigate = (0, import_react71.useNavigate)(), methods = (0, import_react_hook_form13.useForm)();
  return (0, import_react70.useEffect)(() => {
    navigate("./1");
  }, []), /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(
    Outlet2,
    {
      data: { methods }
    }
  );
}

// app/routes/user.support.list.$vid.tsx
var user_support_list_vid_exports = {};
__export(user_support_list_vid_exports, {
  default: () => CustomerSupportView
});
var import_jsx_runtime104 = require("react/jsx-runtime");
function CustomerSupportView() {
  return /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(Outlet2, {});
}

// app/routes/user.traces.$id._index.tsx
var user_traces_id_index_exports = {};
__export(user_traces_id_index_exports, {
  action: () => action22,
  default: () => CustomerTrace,
  loader: () => loader29
});
var import_node35 = require("@remix-run/node"), import_react72 = require("@remix-run/react"), import_Stepper = __toESM(require("@mui/material/Stepper")), import_Step = __toESM(require("@mui/material/Step")), import_StepLabel = __toESM(require("@mui/material/StepLabel")), import_Box24 = __toESM(require("@mui/material/Box")), import_Tooltip2 = __toESM(require("@mui/material/Tooltip")), import_Typography38 = __toESM(require("@mui/material/Typography")), import_RemoveRedEye8 = __toESM(require("@mui/icons-material/RemoveRedEye")), import_CheckCircle = __toESM(require("@mui/icons-material/CheckCircle")), import_Settings2 = __toESM(require("@mui/icons-material/Settings")), import_Circle3 = __toESM(require("@mui/icons-material/Circle"));

// app/models/traces/getTracePromise.server.ts
async function getTracePromise(request, _id) {
  try {
    let dbName = (await getSession(request))?.data?.companyDb, trace = await mongodb.db(dbName).collection("traces").findOne({ _id });
    if (!trace)
      throw new Error("trace not found");
    return {
      result: trace
    };
  } catch (err) {
    return console.error(err), {
      result: null,
      error: err
    };
  }
}

// app/routes/user.traces.$id._index.tsx
var import_jsx_runtime105 = require("react/jsx-runtime"), loader29 = async ({ request, params }) => {
  let { id } = params, {
    result: trace,
    error
  } = await getTracePromise(request, new ObjectId(id));
  return (0, import_node35.json)({ trace });
}, action22 = async ({ request }) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(formData.entries());
  return (0, import_node35.json)({});
};
function CustomerTrace() {
  let { id } = (0, import_react72.useParams)(), { trace } = (0, import_react72.useLoaderData)(), navigate = (0, import_react72.useNavigate)(), onView = (row) => {
    navigate(`./${row?.functionId}`);
  }, tableProps = {
    // isLoading: state === "loading",
    headers: [
      {
        Header: "Name",
        Cell: ({ row: { original } }) => {
          let name = original?.name;
          return /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
            import_Typography38.default,
            {
              component: "span",
              sx: {
                py: 1,
                display: "flex",
                fontSize: "12px",
                alignItems: "center"
              },
              children: name
            }
          );
        }
      },
      { Header: "Status", accessor: "status" },
      {
        Header: "Created",
        Cell: ({ row: { original } }) => {
          let date = original?.created?.at;
          return /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
            import_Typography38.default,
            {
              component: "span",
              style: {
                display: "flex",
                fontSize: "12px",
                alignItems: "center"
              },
              children: date
            }
          );
        }
      },
      {
        Header: "Updated",
        Cell: ({ row: { original } }) => {
          let date = original?.updated?.at;
          return /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
            import_Typography38.default,
            {
              component: "span",
              sx: {
                py: 1,
                display: "flex",
                fontSize: "12px",
                alignItems: "center"
              },
              children: date
            }
          );
        }
      }
    ],
    data: trace?.functions || [],
    actionButtonList: [
      { icon: import_RemoveRedEye8.default, onClick: onView }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_runtime105.jsxs)(import_jsx_runtime105.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Box24.default, { sx: { my: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime105.jsxs)(import_Typography38.default, { variant: "h6", color: "initial", children: [
      "Trace - ",
      trace.traceId
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Box24.default, { sx: { my: 5 }, children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Stepper.default, { activeStep: 3, alternativeLabel: !0, children: trace?.functions?.map((obj) => /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Tooltip2.default, { title: obj?.functionId + " " + obj?.status, children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Step.default, { children: obj.status === "COMPLETED" /* COMPLETED */ ? /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
      import_StepLabel.default,
      {
        StepIconComponent: (e) => /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
          import_CheckCircle.default,
          {
            color: "success",
            sx: { fontSize: 30 }
          }
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Typography38.default, { variant: "body2", sx: {
          fontWeight: 500,
          color: "green"
        }, children: obj.name })
      }
    ) : obj.status === "FAILED" /* FAILED */ ? /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
      import_StepLabel.default,
      {
        error: !0,
        children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Typography38.default, { variant: "body2", sx: {
          fontWeight: 500
          // color: "green"
        }, children: obj.name })
      }
    ) : obj.status === "IN PROGRESS" /* IN_PROGRESS */ ? /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
      import_StepLabel.default,
      {
        StepIconComponent: (e) => /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
          import_Settings2.default,
          {
            sx: { fontSize: 30, color: "orange" }
          }
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Typography38.default, { variant: "body2", sx: {
          fontWeight: 500,
          color: "orange"
        }, children: obj.name })
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
      import_StepLabel.default,
      {
        StepIconComponent: (e) => /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Box24.default, { children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
          import_Circle3.default,
          {
            sx: { fontSize: 18, pt: 1, color: "gray" }
          }
        ) }),
        children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Typography38.default, { variant: "body2", sx: {
          fontWeight: 500,
          color: "#656565"
        }, children: obj.name })
      }
    ) }, obj?.status) })) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime105.jsxs)(import_Box24.default, { sx: { display: "flex", width: "100%", flexWrap: "none", gap: 2 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Box24.default, { sx: { border: 0, flexGrow: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
        AdvancedTable_default,
        {
          ...tableProps,
          sx: { my: 0 }
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_Box24.default, { sx: { border: "0px solid gray", boxShadow: 2, width: "30%", flexShrink: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
        LogsComponent_default,
        {
          logs: trace?.logs || []
        }
      ) })
    ] })
  ] });
}

// app/routes/user.analytics._index.tsx
var user_analytics_index_exports = {};
__export(user_analytics_index_exports, {
  loader: () => loader30
});
var import_node36 = require("@remix-run/node");
function loader30() {
  return (0, import_node36.redirect)("customer");
}

// app/routes/user.customers._index.tsx
var user_customers_index_exports = {};
__export(user_customers_index_exports, {
  default: () => ItemMasterIndex,
  loader: () => loader31
});
var import_node37 = require("@remix-run/node"), import_react73 = require("@remix-run/react");
var import_jsx_runtime106 = require("react/jsx-runtime");
async function loader31({ request }) {
  let userId = await getUserId(request);
  return (0, import_node37.json)({
    // customerList: await getAllCustomerEntitiesPromise(new ObjectId(userId)),
    customerList: []
  });
}
function ItemMasterIndex() {
  let { customerList } = (0, import_react73.useLoaderData)(), { state } = (0, import_react73.useNavigation)(), navigate = (0, import_react73.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime106.jsxs)(import_jsx_runtime106.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(ModuleTabTitle_default, { title: "Customer Entities" }),
    /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(ModuleTabButton_default, { text: "Add Customer", navigateTo: "add" }),
    /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(AdvancedTable_default, { ...{
      isLoading: state === "loading",
      headers: [
        { Header: "Entity Code", accessor: "code" },
        { Header: "Name", accessor: "name" },
        // {
        // 	Header: "Tags",
        // 	Cell: ({ row: { original } }: any) => {
        // 		return (
        // 			<Typography
        // 				component='span'
        // 				style={{
        // 					display: "flex",
        // 					fontSize: "12px",
        // 					alignItems: "center",
        // 				}}
        // 			>
        // 				{original?.tags?.join(", ") || "-"}
        // 			</Typography>
        // 		);
        // 	},
        // },
        // {
        // 	Header: "Workflows",
        // 	Cell: ({ row: { original } }: any) => {
        // 		return (
        // 			<Typography
        // 				component='span'
        // 				style={{
        // 					display: "flex",
        // 					fontSize: "12px",
        // 					alignItems: "center",
        // 				}}
        // 			>
        // 				{original?.workflows?.join(", ") || "-"}
        // 			</Typography>
        // 		);
        // 	},
        // },
        {
          Header: "Active",
          Cell: ActiveCell_default
        }
      ],
      data: customerList,
      actionButtonList: [
        {
          icon: EditIcon_default,
          onClick: (row) => navigate(row._id + "/edit")
        }
      ]
    } })
  ] });
}

// app/routes/user.dashboard._index.tsx
var user_dashboard_index_exports = {};
__export(user_dashboard_index_exports, {
  default: () => DashboardPage
});
var import_Typography39 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime107 = require("react/jsx-runtime");
function DashboardPage() {
  let parentData = useParentData();
  return console.log(parentData), /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(import_jsx_runtime107.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(import_Typography39.default, { variant: "h6", children: "Customer Dashboard" }) });
}

// app/routes/user.support.list.add.tsx
var user_support_list_add_exports = {};
__export(user_support_list_add_exports, {
  action: () => action23,
  default: () => CustomerSupportAdd
});
var import_node38 = require("@remix-run/node"), import_node39 = require("@remix-run/node");

// app/components/customers/forms/CustomerSupportForm.tsx
var import_react_hook_form14 = require("react-hook-form"), import_react74 = require("@remix-run/react"), import_Typography40 = __toESM(require("@mui/material/Typography")), import_Grid14 = __toESM(require("@mui/material/Grid")), import_TextField8 = __toESM(require("@mui/material/TextField"));
var import_jsx_runtime108 = require("react/jsx-runtime"), CustomerSupportFormFields = ({
  defaultValues,
  moduleList: moduleList3
}) => {
  let { register } = (0, import_react_hook_form14.useForm)({
    defaultValues
  });
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(import_Grid14.default, { container: !0, spacing: 1, style: { alignItems: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(import_Grid14.default, { item: !0, xs: 12, sm: 6, children: [
      /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_Typography40.default, { children: "Ticket Module" }),
      /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
        import_Typography40.default,
        {
          style: {
            fontSize: "11.5px"
          },
          children: "Choose the ticket module."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_Grid14.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
      DropDownInput_default,
      {
        fieldName: "module",
        label: "Ticket Module",
        itemList: moduleList3,
        defaultValue: defaultValues?.ticketModule,
        register,
        required: !1
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(import_Grid14.default, { item: !0, xs: 12, sm: 6, children: [
      /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_Typography40.default, { children: "Document" }),
      /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
        import_Typography40.default,
        {
          style: {
            fontSize: "11.5px"
          },
          children: "Attach the document for the ticket if any."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_Grid14.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
      import_TextField8.default,
      {
        size: "small",
        fullWidth: !0,
        variant: "outlined",
        margin: "normal",
        type: "file",
        ...register(
          "document"
          // { value: defaultValues?.document, }
        )
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(import_Grid14.default, { item: !0, xs: 12, sm: 6, children: [
      /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_Typography40.default, { children: "Description" }),
      /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
        import_Typography40.default,
        {
          style: {
            fontSize: "11.5px"
          },
          children: "Mention the description of the ticket."
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_Grid14.default, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
      SimpleTextField_default,
      {
        register,
        fieldName: "description",
        label: "Description",
        multiline: !0,
        rows: 2
      }
    ) })
  ] });
}, CustomerSupportForm = ({
  defaultValues,
  editMode = !1,
  moduleList: moduleList3
}) => /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(import_react74.Form, { method: "POST", encType: "multipart/form-data", children: [
  /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_Grid14.default, { container: !0, spacing: 2, marginTop: 1, children: /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(import_Grid14.default, { item: !0, xs: 8, children: [
    /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
      FormTitleWithBackButton_default,
      {
        title: "Ticket",
        editMode
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_Grid14.default, { container: !0, alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
      CustomerSupportFormFields,
      {
        defaultValues,
        moduleList: moduleList3
      }
    ) })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(SubmitOrSave_default, {})
] }), CustomerSupportForm_default = CustomerSupportForm;

// app/models/customers/customerTicket/createSupportTicketPromise.server.ts
async function createSupportTicketPromise(document2, optional = {}) {
  return mongodb.db(optional.companyDb || "cross-dock-data").collection("customerSupport").insertOne(document2);
}

// app/utils/zod/supportTicket/index.ts
var import_zod11 = require("zod");

// app/utils/zod/supportTicket/log/index.ts
var import_zod10 = require("zod");
var LogLevel = /* @__PURE__ */ ((LogLevel2) => (LogLevel2.NORMAL = "grey", LogLevel2.PRIMARY = "primary", LogLevel2.SECONDARY = "secondary", LogLevel2.INFO = "info", LogLevel2.SUCCESS = "success", LogLevel2.WARNING = "warning", LogLevel2.ERROR = "error", LogLevel2))(LogLevel || {}), supportTicketLogDBSchema = import_zod10.z.object({
  // name: z.string(),
  level: import_zod10.z.nativeEnum(LogLevel).default("grey" /* NORMAL */).optional(),
  details: import_zod10.z.object({
    message: import_zod10.z.string()
  }),
  user: import_zod10.z.object({
    _id: transformObjectId_default,
    name: import_zod10.z.string()
  }),
  createdAt: import_zod10.z.date()
}), log_default = supportTicketLogDBSchema;

// app/utils/zod/supportTicket/index.ts
var SupportTicketStatus = /* @__PURE__ */ ((SupportTicketStatus2) => (SupportTicketStatus2.Open = "Open", SupportTicketStatus2.Closed = "Closed", SupportTicketStatus2))(SupportTicketStatus || {}), supportTicketSchema = import_zod11.z.object({
  _id: transformObjectId_default.optional(),
  module: import_zod11.z.string(),
  document: import_zod11.z.string().url({ message: "Invalid url" }).optional(),
  description: import_zod11.z.string().optional(),
  status: import_zod11.z.nativeEnum(SupportTicketStatus).default("Open" /* Open */),
  comments: import_zod11.z.array(
    import_zod11.z.object({
      user: import_zod11.z.object({
        _id: transformObjectId_default,
        name: import_zod11.z.string()
      }),
      comment: import_zod11.z.string(),
      createdAt: transformDate_default
    })
  ).default([]),
  logs: import_zod11.z.array(log_default).default([]),
  created: import_zod11.z.object({
    at: transformDate_default,
    by: transformObjectId_default
  }),
  updated: import_zod11.z.object({
    at: transformDate_default.optional(),
    by: transformObjectId_default.optional()
  }).optional()
}), supportTicket_default = supportTicketSchema;

// app/routes/user.support.list.add.tsx
var import_jsx_runtime109 = require("react/jsx-runtime"), action23 = async ({ request }) => {
  try {
    let uploadHandler = (0, import_node39.unstable_createMemoryUploadHandler)({
      maxPartSize: 5e5
    }), formData = await (0, import_node39.unstable_parseMultipartFormData)(
      request,
      uploadHandler
    ), rawDocument = Object.fromEntries(
      formData.entries()
    ), fileURL = "http://localhost/" + rawDocument?.document?._name, userId = await getUserId(request), user = await getUser(request), companyDb = await getCompanyDb(request);
    rawDocument = {
      ...rawDocument,
      document: fileURL,
      created: { at: /* @__PURE__ */ new Date(), by: new ObjectId(userId) },
      logs: [{
        user: {
          _id: new ObjectId(userId),
          name: user?.name || ""
        },
        createdAt: /* @__PURE__ */ new Date(),
        details: {
          message: `${user?.name || "User"} created a ticket!`
        }
      }]
    }, console.log(rawDocument);
    let validatedDocument = supportTicket_default.parse(rawDocument);
    validatedDocument = {
      ...validatedDocument
      // document: url
    };
    let { insertedId } = await createSupportTicketPromise(
      validatedDocument,
      {
        companyDb
      }
    );
    if (!insertedId)
      throw new Error("Failed to insert ticket");
    return (0, import_node38.redirect)("../");
  } catch (error) {
    return console.error("An error occurred:", error), (0, import_node38.redirect)(".");
  }
};
function CustomerSupportAdd() {
  return /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(CustomerSupportForm_default, { moduleList: moduleList2, defaultValues: null });
}
var moduleList2 = [
  {
    name: "Customer",
    value: "customer"
  },
  {
    name: "Order",
    value: "order"
  },
  {
    name: "Product",
    value: "product"
  },
  {
    name: "Payment",
    value: "payment"
  },
  {
    name: "Shipping",
    value: "shipping"
  },
  {
    name: "Other",
    value: "other"
  }
];

// app/routes/user.workflows._index.tsx
var user_workflows_index_exports = {};
__export(user_workflows_index_exports, {
  loader: () => loader32
});
var import_node40 = require("@remix-run/node");
function loader32() {
  return (0, import_node40.redirect)("list");
}

// app/routes/user.workflows.design.tsx
var user_workflows_design_exports = {};
__export(user_workflows_design_exports, {
  default: () => CustomerWorkflowDesign
});
var import_jsx_runtime110 = require("react/jsx-runtime"), status = [
  {
    name: "INITIATED"
  },
  {
    name: "COMPLETED"
  },
  {
    name: "FAILED"
  },
  {
    name: "PENDING"
  },
  {
    name: "IN PROGRESS"
  }
];
function CustomerWorkflowDesign() {
  return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
    Outlet2,
    {
      data: { statusList: status }
    }
  );
}

// app/routes/user.user-management.tsx
var user_user_management_exports = {};
__export(user_user_management_exports, {
  default: () => CustomersUserManagement
});
var import_Typography41 = __toESM(require("@mui/material/Typography")), import_react77 = require("@remix-run/react");

// app/components/TabsComponent.tsx
var import_react75 = require("react"), import_Box25 = __toESM(require("@mui/material/Box")), import_Tab = __toESM(require("@mui/material/Tab")), import_Tabs = __toESM(require("@mui/material/Tabs")), import_react76 = require("@remix-run/react"), import_jsx_runtime111 = require("react/jsx-runtime"), TabsComponent = ({ tabArray }) => {
  let location = (0, import_react76.useLocation)(), [value, setValue] = (0, import_react75.useState)(0), handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (0, import_react75.useEffect)(() => {
    let lastPart = location.pathname.split("/")?.at(3), index = tabArray.findIndex(
      (item) => item?.to === `./${lastPart}`
    );
    setValue(index);
  }, [location.pathname]), /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(
    import_Box25.default,
    {
      sx: {
        flexGrow: 1,
        bgcolor: "background.paper"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(
        import_Tabs.default,
        {
          value,
          variant: "scrollable",
          scrollButtons: !0,
          sx: {
            [`& .${import_Tabs.tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 }
            },
            backgroundColor: "tab.background"
          },
          children: tabArray?.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(import_react76.Link, { to: item?.to, children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(
            import_Tab.default,
            {
              sx: {
                backgroundColor: value === i ? "background.light" : "background.dense",
                color: value == i ? "tab.text" : "tab.subText"
              },
              onChange: (e) => handleChange(e, i),
              label: item?.name
            },
            i
          ) }, i.toString()))
        }
      )
    }
  );
}, TabsComponent_default = TabsComponent;

// app/routes/user.user-management.tsx
var import_jsx_runtime112 = require("react/jsx-runtime");
function CustomersUserManagement() {
  return /* @__PURE__ */ (0, import_jsx_runtime112.jsxs)(import_jsx_runtime112.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(import_Typography41.default, { variant: "h6", children: "User Management" }),
    /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
      TabsComponent_default,
      {
        tabArray: [
          {
            name: "Users",
            to: "./users"
          },
          {
            name: "Groups",
            to: "./groups"
          }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(import_react77.Outlet, {})
  ] });
}

// app/routes/user.support._index.tsx
var user_support_index_exports = {};
__export(user_support_index_exports, {
  loader: () => loader33
});
var import_node41 = require("@remix-run/node");
function loader33() {
  return (0, import_node41.redirect)("list");
}

// app/routes/user.workflows.list.tsx
var user_workflows_list_exports = {};
__export(user_workflows_list_exports, {
  default: () => CustomerWorkflowList
});
var import_jsx_runtime113 = require("react/jsx-runtime");
function CustomerWorkflowList() {
  return /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(Outlet2, {});
}

// app/routes/user.customers.add.tsx
var user_customers_add_exports = {};
__export(user_customers_add_exports, {
  action: () => action24,
  default: () => CustomerEntityAdd,
  loader: () => loader34
});
var import_react78 = require("@remix-run/react"), import_node43 = require("@remix-run/node");

// app/models/customers/entities/createCustomerEntityPromise.server.ts
var import_node42 = require("@remix-run/node");
async function createCustomerEntityPromise(rawDocument) {
  try {
    let parsedDocument = customerEntityDBSchema_default.parse(rawDocument), collection = mongodb.db("cross-dock-data").collection("customerEntities"), { insertedId } = await collection.insertOne(parsedDocument);
    if (!insertedId)
      throw new Error("Failed to insert entity");
    return (0, import_node42.redirect)("../");
  } catch (err) {
    return (0, import_node42.json)({ error: err.message }, { status: 500 });
  }
}

// app/routes/user.customers.add.tsx
var import_jsx_runtime114 = require("react/jsx-runtime"), loader34 = async () => {
  let tagList = [], workflowList = await getAllWorkflowsPromise();
  return (0, import_node43.json)({ tagList, workflowList });
}, action24 = async ({
  request
}) => {
  let formData = await request.formData(), rawDocument = Object.fromEntries(
    formData.entries()
  ), userId = await getUserId(request);
  return await createCustomerEntityPromise({
    ...rawDocument,
    created: { at: /* @__PURE__ */ new Date(), by: new ObjectId(userId) }
  });
};
function CustomerEntityAdd() {
  let { tagList, workflowList } = (0, import_react78.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
    CustomerEntityForm_default,
    {
      tagList,
      workflowList,
      defaultValues: null
    }
  );
}

// app/routes/user.orders._index.tsx
var user_orders_index_exports = {};
__export(user_orders_index_exports, {
  loader: () => loader35
});
var import_node44 = require("@remix-run/node");
function loader35() {
  return (0, import_node44.redirect)("list");
}

// app/routes/user.traces._index.tsx
var user_traces_index_exports = {};
__export(user_traces_index_exports, {
  loader: () => loader36
});
var import_node45 = require("@remix-run/node");
function loader36() {
  return (0, import_node45.redirect)("list");
}

// app/routes/user.support.list.tsx
var user_support_list_exports = {};
__export(user_support_list_exports, {
  default: () => CustomerSupportList
});
var import_jsx_runtime115 = require("react/jsx-runtime");
function CustomerSupportList() {
  return /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(Outlet2, {});
}

// app/routes/user.orders.list.tsx
var user_orders_list_exports = {};
__export(user_orders_list_exports, {
  default: () => CustomerSupportList2
});
var import_jsx_runtime116 = require("react/jsx-runtime");
function CustomerSupportList2() {
  return /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(Outlet2, {});
}

// app/routes/user.traces.list.tsx
var user_traces_list_exports = {};
__export(user_traces_list_exports, {
  default: () => CustomerTracesList
});
var import_react79 = require("@remix-run/react"), import_react80 = require("react");
var import_jsx_runtime117 = require("react/jsx-runtime");
function CustomerTracesList() {
  let { pageNo } = (0, import_react79.useParams)(), navigate = (0, import_react79.useNavigate)();
  return (0, import_react80.useEffect)(() => {
    pageNo || navigate("1");
  }, []), /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(Outlet2, {});
}

// app/routes/user.track-trace.tsx
var user_track_trace_exports = {};
__export(user_track_trace_exports, {
  default: () => TrackAndTrace
});
var import_Typography42 = __toESM(require("@mui/material/Typography")), import_react81 = require("@remix-run/react"), import_jsx_runtime118 = require("react/jsx-runtime");
function TrackAndTrace() {
  return /* @__PURE__ */ (0, import_jsx_runtime118.jsxs)(import_jsx_runtime118.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(import_Typography42.default, { sx: { mb: 2 }, variant: "h6", children: "Track And Trace" }),
    /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(import_react81.Outlet, {})
  ] });
}

// app/routes/user.traces.$id.tsx
var user_traces_id_exports = {};
__export(user_traces_id_exports, {
  default: () => CustomerTrace2
});
var import_jsx_runtime119 = require("react/jsx-runtime");
function CustomerTrace2() {
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(Outlet2, {});
}

// app/routes/user.analytics.tsx
var user_analytics_exports = {};
__export(user_analytics_exports, {
  default: () => FeroAnalytics
});
var import_Typography43 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime120 = require("react/jsx-runtime");
function FeroAnalytics() {
  return /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(import_jsx_runtime120.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_Typography43.default, { variant: "h6", children: "Analytics" }),
    /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(
      TabsComponent_default,
      {
        tabArray: [
          { name: "Customer", to: "./customer" },
          { name: "Workflow", to: "./workflow" }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(Outlet2, {})
  ] });
}

// app/routes/user.customers.tsx
var user_customers_exports = {};
__export(user_customers_exports, {
  default: () => CustomerCustomersOutlet
});
var import_Typography44 = __toESM(require("@mui/material/Typography")), import_react82 = require("@remix-run/react"), import_jsx_runtime121 = require("react/jsx-runtime");
function CustomerCustomersOutlet() {
  let navigation = (0, import_react82.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(import_jsx_runtime121.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(import_Typography44.default, { variant: "h6", children: "Customers" }),
    /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(import_react82.Outlet, {})
  ] });
}

// app/routes/user.workflows.tsx
var user_workflows_exports = {};
__export(user_workflows_exports, {
  default: () => Customers
});
var import_Typography45 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime122 = require("react/jsx-runtime");
function Customers() {
  return /* @__PURE__ */ (0, import_jsx_runtime122.jsxs)(import_jsx_runtime122.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(import_Typography45.default, { variant: "h6", children: "Workflows" }),
    /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(
      TabsComponent_default,
      {
        tabArray: [
          { name: "List", to: "./list" },
          { name: "Design", to: "./design" },
          { name: "Functions", to: "./functions" }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(Outlet2, {})
  ] });
}

// app/routes/user.support.tsx
var user_support_exports = {};
__export(user_support_exports, {
  default: () => CustomersSupport
});
var import_Typography46 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime123 = require("react/jsx-runtime");
function CustomersSupport() {
  return /* @__PURE__ */ (0, import_jsx_runtime123.jsxs)(import_jsx_runtime123.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(import_Typography46.default, { variant: "h6", children: "Support" }),
    /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(TabsComponent_default, { tabArray: [{ name: "List", to: "./list" }] }),
    /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(Outlet2, {})
  ] });
}

// app/routes/user._index.tsx
var user_index_exports = {};
__export(user_index_exports, {
  loader: () => loader37
});
var import_node46 = require("@remix-run/node");
function loader37() {
  return (0, import_node46.redirect)("dashboard");
}

// app/routes/user.orders.tsx
var user_orders_exports = {};
__export(user_orders_exports, {
  default: () => user_orders_default
});
var import_Typography47 = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime124 = require("react/jsx-runtime");
function CustomerOrders({}) {
  return /* @__PURE__ */ (0, import_jsx_runtime124.jsxs)(import_jsx_runtime124.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(import_Typography47.default, { variant: "h6", children: "Orders" }),
    /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(TabsComponent_default, { tabArray: [{ name: "List", to: "./list" }] }),
    /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(Outlet2, {})
  ] });
}
var user_orders_default = CustomerOrders;

// app/routes/user.traces.tsx
var user_traces_exports = {};
__export(user_traces_exports, {
  default: () => CustomersTraces
});
var import_Typography48 = __toESM(require("@mui/material/Typography")), import_react83 = require("@remix-run/react");
var import_jsx_runtime125 = require("react/jsx-runtime");
function CustomersTraces() {
  return /* @__PURE__ */ (0, import_jsx_runtime125.jsxs)(import_jsx_runtime125.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(import_Typography48.default, { variant: "h6", children: "Traces" }),
    /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(TabsComponent_default, { tabArray: [{ name: "List", to: "./list" }] }),
    /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(import_react83.Outlet, {})
  ] });
}

// app/routes/logout_.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action25,
  loader: () => loader38
});
var import_node47 = require("@remix-run/node");
var action25 = async ({ request }) => await logout(request), loader38 = async () => (0, import_node47.redirect)("/login");

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader39
});
var import_node48 = require("@remix-run/node"), import_jsx_runtime126 = require("react/jsx-runtime");
async function loader39() {
  return (0, import_node48.redirect)("/login");
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime126.jsx)("h1", { children: "Redirecting..." });
}

// app/routes/login_.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action27,
  default: () => LoginPage,
  loader: () => loader41
});
var import_react89 = require("react"), import_material16 = require("@mui/material");

// app/components/login/LoginForm.tsx
var import_react84 = require("react"), import_material15 = require("@mui/material"), import_icons_material2 = require("@mui/icons-material"), import_react85 = require("@remix-run/react"), import_react86 = require("@remix-run/react"), import_jsx_runtime127 = require("react/jsx-runtime");
function LoginForm({ actionData }) {
  let [showPassword, setShowPassword] = (0, import_react84.useState)(!1), isSubmitting = (0, import_react85.useNavigation)().state === "submitting", toggleShowPassword = () => setShowPassword(!showPassword);
  return /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_react86.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime127.jsxs)(import_material15.Grid, { container: !0, spacing: 2, justifyContent: "center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_material15.Grid, { item: !0, xs: 10, children: /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_material15.TextField, { id: "email", name: "email", type: "email", label: "Email", variant: "outlined", margin: "normal", required: !0, fullWidth: !0, autoFocus: !0, error: !!actionData?.errors?.email, helperText: actionData?.errors?.email }) }),
    /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_material15.Grid, { item: !0, xs: 10, children: /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_material15.TextField, { id: "password", name: "password", type: showPassword ? "text" : "password", label: "Password", variant: "outlined", margin: "normal", required: !0, fullWidth: !0, InputProps: { endAdornment: /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(PasswordAdornment, { showPassword, onClick: toggleShowPassword }) }, error: !!actionData?.errors?.password, helperText: actionData?.errors?.password }) }),
    /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_material15.Grid, { item: !0, xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_material15.Button, { type: "submit", fullWidth: !0, variant: "contained", disabled: isSubmitting, children: "Sign In" }) })
  ] }) });
}
function PasswordAdornment({ showPassword, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_material15.InputAdornment, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_material15.IconButton, { "aria-label": "toggle password visibility", onClick, edge: "end", children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_icons_material2.VisibilityOff, {}) : /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_icons_material2.Visibility, {}) }) });
}

// app/components/login/Logo.tsx
var import_Box26 = __toESM(require("@mui/material/Box")), import_jsx_runtime128 = require("react/jsx-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(import_Box26.default, { sx: { mb: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime128.jsx)("img", { width: 115, height: 25, alt: "Fero.ai", src: "https://ferouaeinternalstorageac.blob.core.windows.net/ferowebprodstatic/images/fero.png" }) });
}
var Logo_default = Logo;

// app/routes/login_.tsx
var import_react90 = require("@remix-run/react");

// app/server/login.server.ts
var import_node49 = require("@remix-run/node");

// app/utils/index.ts
var import_react87 = require("@remix-run/react"), import_react88 = require("react");
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/server/login.server.ts
async function loader40({ request }) {
  return console.log("Running login loader"), await getUserId(request) ? (0, import_node49.redirect)("/user") : (0, import_node49.json)({});
}
async function action26({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node49.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node49.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return console.log("user", user), user ? createUserSession({
    request,
    userId: user._id.toString(),
    isAdmin: !!user.isAdmin,
    name: user.name,
    companyId: user.companyId.toString(),
    // companyDb: user.companyDb,
    redirectTo: "/user",
    remember: remember === "on"
  }) : (0, import_node49.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}

// app/routes/login_.tsx
var import_jsx_runtime129 = require("react/jsx-runtime"), loader41 = loader40, action27 = action26;
function LoginPage() {
  let actionData = (0, import_react90.useActionData)();
  return (0, import_react89.useEffect)(() => {
    actionData?.errors?.email ? document.getElementById("email")?.focus() : actionData?.errors?.password && document.getElementById("password")?.focus();
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(import_material16.Container, { maxWidth: "lg", sx: { display: "flex", alignItems: "center", justifyContent: "center", height: "90vh" }, children: /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)(import_material16.Paper, { elevation: 3, sx: { p: 5, display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0px 5px 7px 7px rgba(0,0,0,0.2)" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(Logo_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(import_material16.Typography, { component: "h1", variant: "h6", children: "Log in" }),
    /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(LoginForm, { actionData })
  ] }) });
}

// app/routes/user.tsx
var user_exports = {};
__export(user_exports, {
  default: () => User,
  loader: () => loader42
});
var import_Box29 = __toESM(require("@mui/material/Box")), import_Toolbar3 = __toESM(require("@mui/material/Toolbar")), import_CssBaseline = __toESM(require("@mui/material/CssBaseline")), import_styles3 = require("@mui/material/styles"), import_Button13 = __toESM(require("@mui/material/Button"));

// app/components/Navbar.tsx
var import_AppBar = __toESM(require("@mui/material/AppBar")), import_Toolbar = __toESM(require("@mui/material/Toolbar")), import_Typography49 = __toESM(require("@mui/material/Typography")), import_Button12 = __toESM(require("@mui/material/Button")), import_Box27 = __toESM(require("@mui/material/Box")), import_react91 = require("@remix-run/react"), import_IconButton5 = __toESM(require("@mui/material/IconButton")), import_Brightness4 = __toESM(require("@mui/icons-material/Brightness4")), import_Brightness7 = __toESM(require("@mui/icons-material/Brightness7")), import_jsx_runtime130 = require("react/jsx-runtime"), ToggleMode = ({
  toggleTheme,
  currentTheme
}) => /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_Box27.default, { sx: { color: "text.primary" }, children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_IconButton5.default, { sx: { mr: 1 }, color: "inherit", onClick: toggleTheme, children: currentTheme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_Brightness7.default, {}) : /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_Brightness4.default, {}) }) }), Navbar = ({
  toggleTheme,
  currentTheme
}) => /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
  import_AppBar.default,
  {
    position: "fixed",
    sx: {
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: "header.background",
      maxHeight: "3.5rem"
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(
      import_Toolbar.default,
      {
        sx: {
          display: "flex",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_Typography49.default, { variant: "h6", noWrap: !0, component: "div", children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_react91.Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
            "img",
            {
              src: "https://fero-saas-next.vercel.app/_next/image?url=%2Flogos%2Ffero_logo.png&w=128&q=75",
              alt: "Logo",
              height: 20
            }
          ) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(
            import_Box27.default,
            {
              style: { alignItems: "center" },
              sx: {
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex"
                }
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
                  ToggleMode,
                  {
                    toggleTheme,
                    currentTheme
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_react91.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
                  import_Button12.default,
                  {
                    sx: { color: "common.white" },
                    type: "submit",
                    variant: "contained",
                    size: "small",
                    children: "Logout"
                  }
                ) })
              ]
            }
          )
        ]
      }
    )
  }
), Navbar_default = Navbar;

// app/components/Sidebar/index.tsx
var import_react94 = require("react"), import_Box28 = __toESM(require("@mui/material/Box")), import_Grid16 = __toESM(require("@mui/material/Grid")), import_Drawer2 = __toESM(require("@mui/material/Drawer")), import_Toolbar2 = __toESM(require("@mui/material/Toolbar"));

// app/components/Sidebar/components/Section.tsx
var import_react92 = require("react"), import_react93 = require("@remix-run/react"), import_Grid15 = __toESM(require("@mui/material/Grid")), import_jsx_runtime131 = require("react/jsx-runtime"), SectionWithoutChildren = ({
  section,
  activeItem,
  setActiveItem
}) => /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
  import_react93.NavLink,
  {
    unstable_viewTransition: !0,
    to: `/user/${section.path}`,
    style: {
      fontSize: "1rem",
      textDecoration: "none"
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(
      import_Grid15.default,
      {
        container: !0,
        spacing: 0.5,
        sx: {
          color: activeItem === section.path ? "primary.main" : "sidebar.textHighlight",
          ":hover": {
            backgroundColor: "sidebar.hoverBackground"
          },
          // m: 0,
          backgroundColor: activeItem === section.path && "sidebar.hoverBackground" || null
        },
        onClick: () => setActiveItem(section.path),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_Grid15.default, { item: !0, xs: 2, children: section?.icon && (0, import_react92.createElement)(section.icon, {
            color: activeItem === section.path ? "primary" : "inherit",
            fontSize: "small"
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
            import_Grid15.default,
            {
              item: !0,
              xs: 10,
              sx: {
                fontWeight: activeItem == section.path ? "bold" : "normal",
                // use roboto font
                fontFamily: "roboto"
              },
              children: section?.sectionName
            }
          )
        ]
      }
    )
  }
), Section_default = SectionWithoutChildren;

// app/components/Sidebar/index.tsx
var import_jsx_runtime132 = require("react/jsx-runtime"), drawerWidth = 180, Sidebar = ({ sideNavData }) => {
  let [activeItem, setActiveItem] = (0, import_react94.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(
    import_Drawer2.default,
    {
      variant: "permanent",
      sx: {
        width: drawerWidth,
        flexShrink: 0,
        ["& .MuiDrawer-paper"]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "sidebar.background"
        }
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_Toolbar2.default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_Box28.default, { sx: { overflow: "auto" }, children: sideNavData.map((section, index) => /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_Grid16.default, { item: !0, children: /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
          import_Box28.default,
          {
            sx: {
              paddingLeft: 1,
              paddingTop: 1
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
              Section_default,
              {
                section,
                activeItem,
                setActiveItem
              }
            )
          },
          index
        ) }, section.sectionName)) })
      ]
    }
  );
}, Sidebar_default = Sidebar;

// app/routes/user.tsx
var import_react96 = require("@remix-run/react");

// app/hooks/useThemeToggle.tsx
var import_react95 = require("react"), import_styles2 = require("@mui/material/styles");

// app/utils/themes/palette.ts
var getPalette = (mode2) => ({
  mode: mode2,
  common: { white: "#FFFFFF", black: "#000000" },
  ...mode2 === "light" ? {
    background: { light: "#F9F9F9", dense: "#FFFFFF" },
    backgroundReverse: { light: "#000000", dense: "#101010" },
    borderColor: "#101010",
    main: { background: "#FFFFFF" },
    header: { background: "#FFFFFF" },
    tab: {
      background: "whitesmoke",
      text: "#101010",
      subText: "#000"
    },
    sidebar: {
      text: "#000",
      background: "#fafbfd",
      textHighlight: "#101010",
      buttonHighlight: "#2AB0C4",
      buttonBackground: "#2A2A2A",
      hoverBackground: "#f3f4f6"
    },
    text: {
      primary: "#000000",
      disabled: "#D3D3D3",
      secondary: "#141414"
    },
    table: {
      text: "#000000",
      hover: "#fffcd1",
      border: "#101010",
      background: "#FFFFFF"
    },
    spreadSheet: {
      text: "#FFFFFF",
      background: "#E6E6E6"
    }
  } : {
    background: { light: "#000000", dense: "#101010" },
    backgroundReverse: { light: "#F9F9F9", dense: "#FFFFFF" },
    borderColor: "#FFFFFF",
    main: { background: "#1E1F24" },
    header: { background: "#101010" },
    tab: { background: "#1E1F24", text: "#f8fafc", subText: "#FFFF" },
    sidebar: {
      text: "#FFFFFF",
      background: "#101010",
      textHighlight: "#F4F4F4",
      buttonHighlight: "#2AB0C4",
      hoverBackground: "#1f2937"
    },
    text: {
      primary: "#FFFFFF",
      disabled: "#D3D3D3",
      secondary: "#E0E0E0"
    },
    table: {
      text: "#FFFFFF",
      hover: "#adad0c",
      border: "#FFFFFF",
      background: "#0D0D0D"
    },
    spreadSheet: {
      text: "#FFFFFF",
      background: "#0D0D0D"
    }
  },
  compatible: "#34B233",
  nonCompatible: "#FF0000",
  primary: { main: "#2AB0C4", light: "#2AB0C4", dark: "#2AB0C4" },
  error: { main: "#F44336", light: "#F44336", dark: "#F44336" },
  warning: { main: "#FFE57F", light: "#FFE57F", dark: "#FFE57F" }
}), palette_default = getPalette;

// app/hooks/useThemeToggle.tsx
function useThemeToggle() {
  let [currentTheme, setCurrentTheme] = (0, import_react95.useState)("light"), lightTheme = (0, import_styles2.createTheme)({
    palette: palette_default("light")
  }), darkTheme = (0, import_styles2.createTheme)({
    palette: palette_default("dark")
  });
  return { theme: currentTheme === "light" ? lightTheme : darkTheme, toggleTheme: () => {
    setCurrentTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  }, currentTheme };
}

// app/routes/user.tsx
var import_node50 = require("@remix-run/node");

// app/models/users/getModulePermission.ts
async function getModulePermission(userId, companyDb, module2) {
  let result = await mongodb.db(companyDb).collection("permissions").findOne(
    {
      userId: new ObjectId(userId),
      "permissions.module": module2
    },
    {
      projection: {
        _id: 0,
        // Exclude _id field from the result
        "permissions.$": 1
        // Include only the matched permissions array element
      }
    }
  );
  if (console.log("result", result), result && result.permissions && result.permissions.length > 0) {
    let permission = result.permissions[0];
    return {
      read: permission.read,
      write: permission.write
    };
  } else
    return null;
}

// app/routes/user.tsx
var import_jsx_runtime133 = require("react/jsx-runtime"), loader42 = async ({ request }) => {
  try {
    let userId = await getUserId(request);
    if (!userId)
      return (0, import_node50.redirect)("/login");
    let userObject = await getUserById(userId);
    if (!userObject)
      return (0, import_node50.redirect)("/login");
    let moduleName = request.url.split("/")?.at(4);
    console.log("moduleName", moduleName);
    let isAdmin = await getIsUserAdmin(request), companyDb = await getCompanyDb(request), permission = await getModulePermission(userId, companyDb, moduleName);
    console.log("permission", permission);
    let readPermission = isAdmin ? !0 : permission?.read, writePermission = isAdmin ? !0 : permission?.write;
    return (0, import_node50.json)({ userObject, moduleName, readPermission, writePermission });
  } catch (err) {
    return console.log("error", err), (0, import_node50.redirect)("/login");
  }
};
function User() {
  let { userObject, moduleName, readPermission, writePermission } = (0, import_react96.useLoaderData)(), { theme, toggleTheme, currentTheme } = useThemeToggle();
  return console.log(readPermission, writePermission), readPermission ? /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(import_styles3.ThemeProvider, { theme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_CssBaseline.default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(import_Box29.default, { sx: { display: "flex" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Navbar_default, { toggleTheme, currentTheme }),
      /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Sidebar_default, { sideNavData: moduleList_default }),
      /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(import_Box29.default, { component: "main", sx: { flexGrow: 1, p: 3, backgroundColor: "background.dense" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_Toolbar3.default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
          Outlet2,
          {
            data: { moduleName, readPermission, writePermission }
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("h1", { children: "Permission Denied! Contact your Admin." }),
    /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_react96.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
      import_Button13.default,
      {
        sx: { color: "common.white" },
        type: "submit",
        variant: "contained",
        size: "small",
        children: "Logout"
      }
    ) })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UQDF3GF5.js", imports: ["/build/_shared/chunk-6SMZLKUC.js", "/build/_shared/chunk-XSFROCMN.js", "/build/_shared/chunk-E37YQCMY.js", "/build/_shared/chunk-7HJGQXDL.js", "/build/_shared/chunk-62XDD4WH.js", "/build/_shared/chunk-W6WK5VNR.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HZTBNQK4.js", imports: ["/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-P5K4SHPC.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-5S4R2VGD.js", imports: ["/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.ext.post.$customerId.$workflowId": { id: "routes/api.ext.post.$customerId.$workflowId", parentId: "root", path: "api/ext/post/:customerId/:workflowId", index: void 0, caseSensitive: void 0, module: "/build/routes/api.ext.post.$customerId.$workflowId-BZUNCYSW.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login_": { id: "routes/login_", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login_-OWDWGIWI.js", imports: ["/build/_shared/chunk-RJTJHHLM.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout_": { id: "routes/logout_", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout_-KTV7PLHB.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user": { id: "routes/user", parentId: "root", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/user-LDPHN3SD.js", imports: ["/build/_shared/chunk-IXOEXTSN.js", "/build/_shared/chunk-ICSY7JBM.js", "/build/_shared/chunk-GTLII25Q.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-LAFAEOUQ.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user._index": { id: "routes/user._index", parentId: "routes/user", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user._index-23XLZO2Y.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.analytics": { id: "routes/user.analytics", parentId: "routes/user", path: "analytics", index: void 0, caseSensitive: void 0, module: "/build/routes/user.analytics-CEB7PY5K.js", imports: ["/build/_shared/chunk-MX5AJE3T.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.analytics._index": { id: "routes/user.analytics._index", parentId: "routes/user.analytics", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.analytics._index-PDPXQSI4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.analytics.customer": { id: "routes/user.analytics.customer", parentId: "routes/user.analytics", path: "customer", index: void 0, caseSensitive: void 0, module: "/build/routes/user.analytics.customer-HSVB32J2.js", imports: ["/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.analytics.customer._index": { id: "routes/user.analytics.customer._index", parentId: "routes/user.analytics.customer", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.analytics.customer._index-MEQBTVTW.js", imports: ["/build/_shared/chunk-DYJEVMDE.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.analytics.workflow": { id: "routes/user.analytics.workflow", parentId: "routes/user.analytics", path: "workflow", index: void 0, caseSensitive: void 0, module: "/build/routes/user.analytics.workflow-FE7G7FZR.js", imports: ["/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.analytics.workflow._index": { id: "routes/user.analytics.workflow._index", parentId: "routes/user.analytics.workflow", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.analytics.workflow._index-S7H7MBE4.js", imports: ["/build/_shared/chunk-DYJEVMDE.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.customers": { id: "routes/user.customers", parentId: "routes/user", path: "customers", index: void 0, caseSensitive: void 0, module: "/build/routes/user.customers-TVQ3AP4F.js", imports: ["/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.customers.$id.activate": { id: "routes/user.customers.$id.activate", parentId: "routes/user.customers", path: ":id/activate", index: void 0, caseSensitive: void 0, module: "/build/routes/user.customers.$id.activate-7V5XMEJQ.js", imports: ["/build/_shared/chunk-4TPMMGOD.js", "/build/_shared/chunk-AMJ266RW.js", "/build/_shared/chunk-37GTQF7E.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-P5K4SHPC.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.customers.$id.edit": { id: "routes/user.customers.$id.edit", parentId: "routes/user.customers", path: ":id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/user.customers.$id.edit-ZEGAQXGI.js", imports: ["/build/_shared/chunk-IIJ2ICZF.js", "/build/_shared/chunk-4TPMMGOD.js", "/build/_shared/chunk-2637XE56.js", "/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/user.customers._index": { id: "routes/user.customers._index", parentId: "routes/user.customers", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.customers._index-V7IU5NH6.js", imports: ["/build/_shared/chunk-M4ZGWPUG.js", "/build/_shared/chunk-4CFVAV5Y.js", "/build/_shared/chunk-HYL3BW47.js", "/build/_shared/chunk-FL42BRI7.js", "/build/_shared/chunk-3GCKK7IR.js", "/build/_shared/chunk-7A7NY4HM.js", "/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.customers.add": { id: "routes/user.customers.add", parentId: "routes/user.customers", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/user.customers.add-2RMPCLEY.js", imports: ["/build/_shared/chunk-IIJ2ICZF.js", "/build/_shared/chunk-2637XE56.js", "/build/_shared/chunk-DNDBSQLD.js", "/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.dashboard._index": { id: "routes/user.dashboard._index", parentId: "routes/user", path: "dashboard", index: !0, caseSensitive: void 0, module: "/build/routes/user.dashboard._index-XKHFGQ5H.js", imports: ["/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.orders": { id: "routes/user.orders", parentId: "routes/user", path: "orders", index: void 0, caseSensitive: void 0, module: "/build/routes/user.orders-BCYKTLLO.js", imports: ["/build/_shared/chunk-MX5AJE3T.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.orders._index": { id: "routes/user.orders._index", parentId: "routes/user.orders", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.orders._index-R6LHVRLM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.orders.list": { id: "routes/user.orders.list", parentId: "routes/user.orders", path: "list", index: void 0, caseSensitive: void 0, module: "/build/routes/user.orders.list-SNJ7N2CB.js", imports: ["/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.orders.list._index": { id: "routes/user.orders.list._index", parentId: "routes/user.orders.list", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.orders.list._index-QENU6IXL.js", imports: ["/build/_shared/chunk-Y2B4IDNO.js", "/build/_shared/chunk-DNDBSQLD.js", "/build/_shared/chunk-DODECNRH.js", "/build/_shared/chunk-FL42BRI7.js", "/build/_shared/chunk-3GCKK7IR.js", "/build/_shared/chunk-7A7NY4HM.js", "/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.support": { id: "routes/user.support", parentId: "routes/user", path: "support", index: void 0, caseSensitive: void 0, module: "/build/routes/user.support-ENJFWXSL.js", imports: ["/build/_shared/chunk-MX5AJE3T.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.support._index": { id: "routes/user.support._index", parentId: "routes/user.support", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.support._index-WHMIJSSR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.support.list": { id: "routes/user.support.list", parentId: "routes/user.support", path: "list", index: void 0, caseSensitive: void 0, module: "/build/routes/user.support.list-VR227KFZ.js", imports: ["/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.support.list.$vid": { id: "routes/user.support.list.$vid", parentId: "routes/user.support.list", path: ":vid", index: void 0, caseSensitive: void 0, module: "/build/routes/user.support.list.$vid-NR6TFBPQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.support.list.$vid._index": { id: "routes/user.support.list.$vid._index", parentId: "routes/user.support.list.$vid", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.support.list.$vid._index-VS53PB6G.js", imports: ["/build/_shared/chunk-IKUIUBE2.js", "/build/_shared/chunk-IXOEXTSN.js", "/build/_shared/chunk-Y2B4IDNO.js", "/build/_shared/chunk-DNDBSQLD.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.support.list._index": { id: "routes/user.support.list._index", parentId: "routes/user.support.list", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.support.list._index-7EESOS5L.js", imports: ["/build/_shared/chunk-Y2B4IDNO.js", "/build/_shared/chunk-DNDBSQLD.js", "/build/_shared/chunk-DODECNRH.js", "/build/_shared/chunk-4CFVAV5Y.js", "/build/_shared/chunk-FL42BRI7.js", "/build/_shared/chunk-3GCKK7IR.js", "/build/_shared/chunk-7A7NY4HM.js", "/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.support.list.add": { id: "routes/user.support.list.add", parentId: "routes/user.support.list", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/user.support.list.add-ZLMFQIQ2.js", imports: ["/build/_shared/chunk-SPK66U6T.js", "/build/_shared/chunk-DNDBSQLD.js", "/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.traces": { id: "routes/user.traces", parentId: "routes/user", path: "traces", index: void 0, caseSensitive: void 0, module: "/build/routes/user.traces-Y6WUO32C.js", imports: ["/build/_shared/chunk-MX5AJE3T.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.traces.$id": { id: "routes/user.traces.$id", parentId: "routes/user.traces", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/user.traces.$id-OX7Q2JSN.js", imports: ["/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.traces.$id.$functionid": { id: "routes/user.traces.$id.$functionid", parentId: "routes/user.traces.$id", path: ":functionid", index: void 0, caseSensitive: void 0, module: "/build/routes/user.traces.$id.$functionid-UITURJFA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.traces.$id.$functionid._index": { id: "routes/user.traces.$id.$functionid._index", parentId: "routes/user.traces.$id.$functionid", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.traces.$id.$functionid._index-2KROJSS7.js", imports: ["/build/_shared/chunk-PFLBP2AR.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.traces.$id._index": { id: "routes/user.traces.$id._index", parentId: "routes/user.traces.$id", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.traces.$id._index-JPJ6FAXF.js", imports: ["/build/_shared/chunk-D2GKIE3X.js", "/build/_shared/chunk-IKUIUBE2.js", "/build/_shared/chunk-Y2B4IDNO.js", "/build/_shared/chunk-DNDBSQLD.js", "/build/_shared/chunk-GTLII25Q.js", "/build/_shared/chunk-DODECNRH.js", "/build/_shared/chunk-3GCKK7IR.js", "/build/_shared/chunk-7A7NY4HM.js", "/build/_shared/chunk-O4WWGC5A.js", "/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.traces._index": { id: "routes/user.traces._index", parentId: "routes/user.traces", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.traces._index-3QMEITT6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.traces.list": { id: "routes/user.traces.list", parentId: "routes/user.traces", path: "list", index: void 0, caseSensitive: void 0, module: "/build/routes/user.traces.list-GRACYHJ5.js", imports: ["/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.traces.list.$pageNo": { id: "routes/user.traces.list.$pageNo", parentId: "routes/user.traces.list", path: ":pageNo", index: void 0, caseSensitive: void 0, module: "/build/routes/user.traces.list.$pageNo-EWQDB3VK.js", imports: ["/build/_shared/chunk-DODECNRH.js", "/build/_shared/chunk-FL42BRI7.js", "/build/_shared/chunk-7A7NY4HM.js", "/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.traces.list.$pageNo.$id": { id: "routes/user.traces.list.$pageNo.$id", parentId: "routes/user.traces.list.$pageNo", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/user.traces.list.$pageNo.$id-PPVR7ZV3.js", imports: ["/build/_shared/chunk-Y2B4IDNO.js", "/build/_shared/chunk-DNDBSQLD.js", "/build/_shared/chunk-LDCFZE5N.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.track-trace": { id: "routes/user.track-trace", parentId: "routes/user", path: "track-trace", index: void 0, caseSensitive: void 0, module: "/build/routes/user.track-trace-443Z2LDK.js", imports: ["/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.track-trace._index": { id: "routes/user.track-trace._index", parentId: "routes/user.track-trace", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.track-trace._index-F6SVM5YZ.js", imports: ["/build/_shared/chunk-D2GKIE3X.js", "/build/_shared/chunk-IKUIUBE2.js", "/build/_shared/chunk-Y2B4IDNO.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management": { id: "routes/user.user-management", parentId: "routes/user", path: "user-management", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management-WLON7ZJK.js", imports: ["/build/_shared/chunk-MX5AJE3T.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management._index": { id: "routes/user.user-management._index", parentId: "routes/user.user-management", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.user-management._index-G67OR7S2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.groups": { id: "routes/user.user-management.groups", parentId: "routes/user.user-management", path: "groups", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management.groups-Q6ONNWLK.js", imports: ["/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.groups.$id": { id: "routes/user.user-management.groups.$id", parentId: "routes/user.user-management.groups", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management.groups.$id-ICBL3V5O.js", imports: ["/build/_shared/chunk-ZCW5JKA7.js", "/build/_shared/chunk-HF3ZRIFO.js", "/build/_shared/chunk-O4WWGC5A.js", "/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.groups._index": { id: "routes/user.user-management.groups._index", parentId: "routes/user.user-management.groups", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.user-management.groups._index-XSZKR5X3.js", imports: ["/build/_shared/chunk-4CFVAV5Y.js", "/build/_shared/chunk-HYL3BW47.js", "/build/_shared/chunk-FL42BRI7.js", "/build/_shared/chunk-3GCKK7IR.js", "/build/_shared/chunk-7A7NY4HM.js", "/build/_shared/chunk-HF3ZRIFO.js", "/build/_shared/chunk-O4WWGC5A.js", "/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.groups.add": { id: "routes/user.user-management.groups.add", parentId: "routes/user.user-management.groups", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management.groups.add-J4SWREU6.js", imports: ["/build/_shared/chunk-ZCW5JKA7.js", "/build/_shared/chunk-HF3ZRIFO.js", "/build/_shared/chunk-O4WWGC5A.js", "/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.list.$id.activate": { id: "routes/user.user-management.list.$id.activate", parentId: "routes/user.user-management", path: "list/:id/activate", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management.list.$id.activate-JTXITK5N.js", imports: ["/build/_shared/chunk-AMJ266RW.js", "/build/_shared/chunk-37GTQF7E.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-P5K4SHPC.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.list.$id.edit": { id: "routes/user.user-management.list.$id.edit", parentId: "routes/user.user-management", path: "list/:id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management.list.$id.edit-Y2I66QN4.js", imports: ["/build/_shared/chunk-DNDBSQLD.js", "/build/_shared/chunk-6SIEGM7X.js", "/build/_shared/chunk-ICSY7JBM.js", "/build/_shared/chunk-GTLII25Q.js", "/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/user.user-management.list.$id.password-change": { id: "routes/user.user-management.list.$id.password-change", parentId: "routes/user.user-management", path: "list/:id/password-change", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management.list.$id.password-change-FK2LCEQA.js", imports: ["/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.list.$vid": { id: "routes/user.user-management.list.$vid", parentId: "routes/user.user-management", path: "list/:vid", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management.list.$vid-7JHBZWGE.js", imports: ["/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.list.$vid._index": { id: "routes/user.user-management.list.$vid._index", parentId: "routes/user.user-management.list.$vid", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.user-management.list.$vid._index-K4GXQML3.js", imports: ["/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.users.$id.edit": { id: "routes/user.user-management.users.$id.edit", parentId: "routes/user.user-management", path: "users/:id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management.users.$id.edit-GKEGMER3.js", imports: ["/build/_shared/chunk-6SIEGM7X.js", "/build/_shared/chunk-ICSY7JBM.js", "/build/_shared/chunk-GTLII25Q.js", "/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.users.$vid": { id: "routes/user.user-management.users.$vid", parentId: "routes/user.user-management", path: "users/:vid", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management.users.$vid-4KZ23MCL.js", imports: ["/build/_shared/chunk-ICSY7JBM.js", "/build/_shared/chunk-GTLII25Q.js", "/build/_shared/chunk-3GCKK7IR.js", "/build/_shared/chunk-7A7NY4HM.js", "/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-37GTQF7E.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-P5K4SHPC.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.users._index": { id: "routes/user.user-management.users._index", parentId: "routes/user.user-management", path: "users", index: !0, caseSensitive: void 0, module: "/build/routes/user.user-management.users._index-POTFVOST.js", imports: ["/build/_shared/chunk-DODECNRH.js", "/build/_shared/chunk-4CFVAV5Y.js", "/build/_shared/chunk-HYL3BW47.js", "/build/_shared/chunk-FL42BRI7.js", "/build/_shared/chunk-3GCKK7IR.js", "/build/_shared/chunk-7A7NY4HM.js", "/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.user-management.users.add": { id: "routes/user.user-management.users.add", parentId: "routes/user.user-management", path: "users/add", index: void 0, caseSensitive: void 0, module: "/build/routes/user.user-management.users.add-5PCWR2DD.js", imports: ["/build/_shared/chunk-IXOEXTSN.js", "/build/_shared/chunk-6SIEGM7X.js", "/build/_shared/chunk-ICSY7JBM.js", "/build/_shared/chunk-GTLII25Q.js", "/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows": { id: "routes/user.workflows", parentId: "routes/user", path: "workflows", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows-NU2ASHJT.js", imports: ["/build/_shared/chunk-MX5AJE3T.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows._index": { id: "routes/user.workflows._index", parentId: "routes/user.workflows", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.workflows._index-PUAL3NOM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.design": { id: "routes/user.workflows.design", parentId: "routes/user.workflows", path: "design", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.design-IPZW6WQZ.js", imports: ["/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.design.$id.edit": { id: "routes/user.workflows.design.$id.edit", parentId: "routes/user.workflows.design", path: ":id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.design.$id.edit-5SA44DXC.js", imports: ["/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/user.workflows.design._index": { id: "routes/user.workflows.design._index", parentId: "routes/user.workflows.design", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.workflows.design._index-BUF7WLOD.js", imports: ["/build/_shared/chunk-M4ZGWPUG.js", "/build/_shared/chunk-DNDBSQLD.js", "/build/_shared/chunk-DODECNRH.js", "/build/_shared/chunk-HYL3BW47.js", "/build/_shared/chunk-FL42BRI7.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.design.status": { id: "routes/user.workflows.design.status", parentId: "routes/user.workflows.design", path: "status", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.design.status-N63UHZQ5.js", imports: ["/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-37GTQF7E.js", "/build/_shared/chunk-P5K4SHPC.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.functions._index": { id: "routes/user.workflows.functions._index", parentId: "routes/user.workflows", path: "functions", index: !0, caseSensitive: void 0, module: "/build/routes/user.workflows.functions._index-FBCGMCV7.js", imports: ["/build/_shared/chunk-DODECNRH.js", "/build/_shared/chunk-4CFVAV5Y.js", "/build/_shared/chunk-HYL3BW47.js", "/build/_shared/chunk-FL42BRI7.js", "/build/_shared/chunk-3GCKK7IR.js", "/build/_shared/chunk-7A7NY4HM.js", "/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.functions.add": { id: "routes/user.workflows.functions.add", parentId: "routes/user.workflows", path: "functions/add", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.functions.add-NMSDNVHC.js", imports: ["/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.list": { id: "routes/user.workflows.list", parentId: "routes/user.workflows", path: "list", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.list-KJ5YKZIR.js", imports: ["/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.list.$id.edit": { id: "routes/user.workflows.list.$id.edit", parentId: "routes/user.workflows.list", path: ":id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.list.$id.edit-I3UUA4O6.js", imports: ["/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/user.workflows.list.$id.edit.$formNo": { id: "routes/user.workflows.list.$id.edit.$formNo", parentId: "routes/user.workflows.list.$id.edit", path: ":formNo", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.list.$id.edit.$formNo-4VMTDYFD.js", imports: ["/build/_shared/chunk-HD5DMRZF.js", "/build/_shared/chunk-SPK66U6T.js", "/build/_shared/chunk-2637XE56.js", "/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.list.$vid": { id: "routes/user.workflows.list.$vid", parentId: "routes/user.workflows.list", path: ":vid", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.list.$vid-XL4QFXZZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.list.$vid._index": { id: "routes/user.workflows.list.$vid._index", parentId: "routes/user.workflows.list.$vid", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.workflows.list.$vid._index-BFOQFFW6.js", imports: ["/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.list._index": { id: "routes/user.workflows.list._index", parentId: "routes/user.workflows.list", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.workflows.list._index-2DRXR3NX.js", imports: ["/build/_shared/chunk-IXOEXTSN.js", "/build/_shared/chunk-M4ZGWPUG.js", "/build/_shared/chunk-DODECNRH.js", "/build/_shared/chunk-4CFVAV5Y.js", "/build/_shared/chunk-HYL3BW47.js", "/build/_shared/chunk-FL42BRI7.js", "/build/_shared/chunk-3GCKK7IR.js", "/build/_shared/chunk-7A7NY4HM.js", "/build/_shared/chunk-VJLEJRLH.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-AYAN7HC2.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.list.add": { id: "routes/user.workflows.list.add", parentId: "routes/user.workflows.list", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.list.add-LMFC5TLI.js", imports: ["/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-GRTEO3EB.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.list.add.$formNo": { id: "routes/user.workflows.list.add.$formNo", parentId: "routes/user.workflows.list.add", path: ":formNo", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.list.add.$formNo-AQF42FP6.js", imports: ["/build/_shared/chunk-HD5DMRZF.js", "/build/_shared/chunk-SPK66U6T.js", "/build/_shared/chunk-2637XE56.js", "/build/_shared/chunk-XCNN6JXL.js", "/build/_shared/chunk-ABYCAPZV.js", "/build/_shared/chunk-UN57GJ3D.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.list.add.$formNo.design": { id: "routes/user.workflows.list.add.$formNo.design", parentId: "routes/user.workflows.list.add.$formNo", path: "design", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.list.add.$formNo.design-6XFCKQMW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.list.add.$formNo.design._index": { id: "routes/user.workflows.list.add.$formNo.design._index", parentId: "routes/user.workflows.list.add.$formNo.design", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/user.workflows.list.add.$formNo.design._index-WTNBVXIO.js", imports: ["/build/_shared/chunk-LDCFZE5N.js", "/build/_shared/chunk-5YP4J3ZU.js", "/build/_shared/chunk-6A3OWZNN.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.workflows.list.add.$formNo.design.key-mapping.$funIndex": { id: "routes/user.workflows.list.add.$formNo.design.key-mapping.$funIndex", parentId: "routes/user.workflows.list.add.$formNo.design", path: "key-mapping/:funIndex", index: void 0, caseSensitive: void 0, module: "/build/routes/user.workflows.list.add.$formNo.design.key-mapping.$funIndex-EMPZJ5NB.js", imports: ["/build/_shared/chunk-RJTJHHLM.js", "/build/_shared/chunk-PFLBP2AR.js", "/build/_shared/chunk-G7M7C4UA.js", "/build/_shared/chunk-5YP4J3ZU.js", "/build/_shared/chunk-JDCVP2PP.js", "/build/_shared/chunk-AX47QFRQ.js", "/build/_shared/chunk-AHTZFU53.js", "/build/_shared/chunk-SNU5V2TK.js", "/build/_shared/chunk-ODU6EHR4.js", "/build/_shared/chunk-E2UYVL3B.js", "/build/_shared/chunk-Z2HB6QWW.js", "/build/_shared/chunk-JA4R6VR4.js", "/build/_shared/chunk-YOCPU4E2.js", "/build/_shared/chunk-VEPXEWGL.js", "/build/_shared/chunk-KOQEN2GR.js", "/build/_shared/chunk-6Z7Y7VIJ.js", "/build/_shared/chunk-ZSIHYXQK.js", "/build/_shared/chunk-JQH5MEM7.js", "/build/_shared/chunk-D3FEDIUG.js", "/build/_shared/chunk-QVZPAWPJ.js", "/build/_shared/chunk-NQHWWWIN.js", "/build/_shared/chunk-D6D2YW26.js", "/build/_shared/chunk-VLYQQSGA.js", "/build/_shared/chunk-ZHDBX2P7.js", "/build/_shared/chunk-SM5ZHNWS.js", "/build/_shared/chunk-O43QBZ6K.js", "/build/_shared/chunk-4M5VT2Y2.js", "/build/_shared/chunk-HFZLCTIW.js", "/build/_shared/chunk-EVQXGWGI.js", "/build/_shared/chunk-LAFAEOUQ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "b6ad7f27", hmr: void 0, url: "/build/manifest-B6AD7F27.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/user.workflows.list.add.$formNo.design.key-mapping.$funIndex": {
    id: "routes/user.workflows.list.add.$formNo.design.key-mapping.$funIndex",
    parentId: "routes/user.workflows.list.add.$formNo.design",
    path: "key-mapping/:funIndex",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_list_add_formNo_design_key_mapping_funIndex_exports
  },
  "routes/user.user-management.list.$id.password-change": {
    id: "routes/user.user-management.list.$id.password-change",
    parentId: "routes/user.user-management",
    path: "list/:id/password-change",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_list_id_password_change_exports
  },
  "routes/user.workflows.list.add.$formNo.design._index": {
    id: "routes/user.workflows.list.add.$formNo.design._index",
    parentId: "routes/user.workflows.list.add.$formNo.design",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_workflows_list_add_formNo_design_index_exports
  },
  "routes/user.user-management.list.$id.activate": {
    id: "routes/user.user-management.list.$id.activate",
    parentId: "routes/user.user-management",
    path: "list/:id/activate",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_list_id_activate_exports
  },
  "routes/user.workflows.list.add.$formNo.design": {
    id: "routes/user.workflows.list.add.$formNo.design",
    parentId: "routes/user.workflows.list.add.$formNo",
    path: "design",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_list_add_formNo_design_exports
  },
  "routes/user.user-management.list.$vid._index": {
    id: "routes/user.user-management.list.$vid._index",
    parentId: "routes/user.user-management.list.$vid",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_user_management_list_vid_index_exports
  },
  "routes/api.ext.post.$customerId.$workflowId": {
    id: "routes/api.ext.post.$customerId.$workflowId",
    parentId: "root",
    path: "api/ext/post/:customerId/:workflowId",
    index: void 0,
    caseSensitive: void 0,
    module: api_ext_post_customerId_workflowId_exports
  },
  "routes/user.workflows.list.$id.edit.$formNo": {
    id: "routes/user.workflows.list.$id.edit.$formNo",
    parentId: "routes/user.workflows.list.$id.edit",
    path: ":formNo",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_list_id_edit_formNo_exports
  },
  "routes/user.user-management.users.$id.edit": {
    id: "routes/user.user-management.users.$id.edit",
    parentId: "routes/user.user-management",
    path: "users/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_users_id_edit_exports
  },
  "routes/user.traces.$id.$functionid._index": {
    id: "routes/user.traces.$id.$functionid._index",
    parentId: "routes/user.traces.$id.$functionid",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_traces_id_functionid_index_exports
  },
  "routes/user.user-management.groups._index": {
    id: "routes/user.user-management.groups._index",
    parentId: "routes/user.user-management.groups",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_user_management_groups_index_exports
  },
  "routes/user.user-management.list.$id.edit": {
    id: "routes/user.user-management.list.$id.edit",
    parentId: "routes/user.user-management",
    path: "list/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_list_id_edit_exports
  },
  "routes/user.user-management.users._index": {
    id: "routes/user.user-management.users._index",
    parentId: "routes/user.user-management",
    path: "users",
    index: !0,
    caseSensitive: void 0,
    module: user_user_management_users_index_exports
  },
  "routes/user.user-management.groups.$id": {
    id: "routes/user.user-management.groups.$id",
    parentId: "routes/user.user-management.groups",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_groups_id_exports
  },
  "routes/user.user-management.groups.add": {
    id: "routes/user.user-management.groups.add",
    parentId: "routes/user.user-management.groups",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_groups_add_exports
  },
  "routes/user.user-management.users.$vid": {
    id: "routes/user.user-management.users.$vid",
    parentId: "routes/user.user-management",
    path: "users/:vid",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_users_vid_exports
  },
  "routes/user.workflows.functions._index": {
    id: "routes/user.workflows.functions._index",
    parentId: "routes/user.workflows",
    path: "functions",
    index: !0,
    caseSensitive: void 0,
    module: user_workflows_functions_index_exports
  },
  "routes/user.workflows.list.$vid._index": {
    id: "routes/user.workflows.list.$vid._index",
    parentId: "routes/user.workflows.list.$vid",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_workflows_list_vid_index_exports
  },
  "routes/user.workflows.list.add.$formNo": {
    id: "routes/user.workflows.list.add.$formNo",
    parentId: "routes/user.workflows.list.add",
    path: ":formNo",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_list_add_formNo_exports
  },
  "routes/user.analytics.customer._index": {
    id: "routes/user.analytics.customer._index",
    parentId: "routes/user.analytics.customer",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_analytics_customer_index_exports
  },
  "routes/user.analytics.workflow._index": {
    id: "routes/user.analytics.workflow._index",
    parentId: "routes/user.analytics.workflow",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_analytics_workflow_index_exports
  },
  "routes/user.user-management.list.$vid": {
    id: "routes/user.user-management.list.$vid",
    parentId: "routes/user.user-management",
    path: "list/:vid",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_list_vid_exports
  },
  "routes/user.user-management.users.add": {
    id: "routes/user.user-management.users.add",
    parentId: "routes/user.user-management",
    path: "users/add",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_users_add_exports
  },
  "routes/user.workflows.design.$id.edit": {
    id: "routes/user.workflows.design.$id.edit",
    parentId: "routes/user.workflows.design",
    path: ":id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_design_id_edit_exports
  },
  "routes/user.support.list.$vid._index": {
    id: "routes/user.support.list.$vid._index",
    parentId: "routes/user.support.list.$vid",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_support_list_vid_index_exports
  },
  "routes/user.traces.list.$pageNo.$id": {
    id: "routes/user.traces.list.$pageNo.$id",
    parentId: "routes/user.traces.list.$pageNo",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: user_traces_list_pageNo_id_exports
  },
  "routes/user.workflows.design._index": {
    id: "routes/user.workflows.design._index",
    parentId: "routes/user.workflows.design",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_workflows_design_index_exports
  },
  "routes/user.workflows.design.status": {
    id: "routes/user.workflows.design.status",
    parentId: "routes/user.workflows.design",
    path: "status",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_design_status_exports
  },
  "routes/user.workflows.functions.add": {
    id: "routes/user.workflows.functions.add",
    parentId: "routes/user.workflows",
    path: "functions/add",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_functions_add_exports
  },
  "routes/user.workflows.list.$id.edit": {
    id: "routes/user.workflows.list.$id.edit",
    parentId: "routes/user.workflows.list",
    path: ":id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_list_id_edit_exports
  },
  "routes/user.customers.$id.activate": {
    id: "routes/user.customers.$id.activate",
    parentId: "routes/user.customers",
    path: ":id/activate",
    index: void 0,
    caseSensitive: void 0,
    module: user_customers_id_activate_exports
  },
  "routes/user.traces.$id.$functionid": {
    id: "routes/user.traces.$id.$functionid",
    parentId: "routes/user.traces.$id",
    path: ":functionid",
    index: void 0,
    caseSensitive: void 0,
    module: user_traces_id_functionid_exports
  },
  "routes/user.user-management._index": {
    id: "routes/user.user-management._index",
    parentId: "routes/user.user-management",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_user_management_index_exports
  },
  "routes/user.user-management.groups": {
    id: "routes/user.user-management.groups",
    parentId: "routes/user.user-management",
    path: "groups",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_groups_exports
  },
  "routes/user.workflows.list._index": {
    id: "routes/user.workflows.list._index",
    parentId: "routes/user.workflows.list",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_workflows_list_index_exports
  },
  "routes/user.support.list._index": {
    id: "routes/user.support.list._index",
    parentId: "routes/user.support.list",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_support_list_index_exports
  },
  "routes/user.traces.list.$pageNo": {
    id: "routes/user.traces.list.$pageNo",
    parentId: "routes/user.traces.list",
    path: ":pageNo",
    index: void 0,
    caseSensitive: void 0,
    module: user_traces_list_pageNo_exports
  },
  "routes/user.workflows.list.$vid": {
    id: "routes/user.workflows.list.$vid",
    parentId: "routes/user.workflows.list",
    path: ":vid",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_list_vid_exports
  },
  "routes/user.analytics.customer": {
    id: "routes/user.analytics.customer",
    parentId: "routes/user.analytics",
    path: "customer",
    index: void 0,
    caseSensitive: void 0,
    module: user_analytics_customer_exports
  },
  "routes/user.analytics.workflow": {
    id: "routes/user.analytics.workflow",
    parentId: "routes/user.analytics",
    path: "workflow",
    index: void 0,
    caseSensitive: void 0,
    module: user_analytics_workflow_exports
  },
  "routes/user.customers.$id.edit": {
    id: "routes/user.customers.$id.edit",
    parentId: "routes/user.customers",
    path: ":id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: user_customers_id_edit_exports
  },
  "routes/user.orders.list._index": {
    id: "routes/user.orders.list._index",
    parentId: "routes/user.orders.list",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_orders_list_index_exports
  },
  "routes/user.track-trace._index": {
    id: "routes/user.track-trace._index",
    parentId: "routes/user.track-trace",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_track_trace_index_exports
  },
  "routes/user.workflows.list.add": {
    id: "routes/user.workflows.list.add",
    parentId: "routes/user.workflows.list",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_list_add_exports
  },
  "routes/user.support.list.$vid": {
    id: "routes/user.support.list.$vid",
    parentId: "routes/user.support.list",
    path: ":vid",
    index: void 0,
    caseSensitive: void 0,
    module: user_support_list_vid_exports
  },
  "routes/user.traces.$id._index": {
    id: "routes/user.traces.$id._index",
    parentId: "routes/user.traces.$id",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_traces_id_index_exports
  },
  "routes/user.analytics._index": {
    id: "routes/user.analytics._index",
    parentId: "routes/user.analytics",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_analytics_index_exports
  },
  "routes/user.customers._index": {
    id: "routes/user.customers._index",
    parentId: "routes/user.customers",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_customers_index_exports
  },
  "routes/user.dashboard._index": {
    id: "routes/user.dashboard._index",
    parentId: "routes/user",
    path: "dashboard",
    index: !0,
    caseSensitive: void 0,
    module: user_dashboard_index_exports
  },
  "routes/user.support.list.add": {
    id: "routes/user.support.list.add",
    parentId: "routes/user.support.list",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: user_support_list_add_exports
  },
  "routes/user.workflows._index": {
    id: "routes/user.workflows._index",
    parentId: "routes/user.workflows",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_workflows_index_exports
  },
  "routes/user.workflows.design": {
    id: "routes/user.workflows.design",
    parentId: "routes/user.workflows",
    path: "design",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_design_exports
  },
  "routes/user.user-management": {
    id: "routes/user.user-management",
    parentId: "routes/user",
    path: "user-management",
    index: void 0,
    caseSensitive: void 0,
    module: user_user_management_exports
  },
  "routes/user.support._index": {
    id: "routes/user.support._index",
    parentId: "routes/user.support",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_support_index_exports
  },
  "routes/user.workflows.list": {
    id: "routes/user.workflows.list",
    parentId: "routes/user.workflows",
    path: "list",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_list_exports
  },
  "routes/user.customers.add": {
    id: "routes/user.customers.add",
    parentId: "routes/user.customers",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: user_customers_add_exports
  },
  "routes/user.orders._index": {
    id: "routes/user.orders._index",
    parentId: "routes/user.orders",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_orders_index_exports
  },
  "routes/user.traces._index": {
    id: "routes/user.traces._index",
    parentId: "routes/user.traces",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_traces_index_exports
  },
  "routes/user.support.list": {
    id: "routes/user.support.list",
    parentId: "routes/user.support",
    path: "list",
    index: void 0,
    caseSensitive: void 0,
    module: user_support_list_exports
  },
  "routes/user.orders.list": {
    id: "routes/user.orders.list",
    parentId: "routes/user.orders",
    path: "list",
    index: void 0,
    caseSensitive: void 0,
    module: user_orders_list_exports
  },
  "routes/user.traces.list": {
    id: "routes/user.traces.list",
    parentId: "routes/user.traces",
    path: "list",
    index: void 0,
    caseSensitive: void 0,
    module: user_traces_list_exports
  },
  "routes/user.track-trace": {
    id: "routes/user.track-trace",
    parentId: "routes/user",
    path: "track-trace",
    index: void 0,
    caseSensitive: void 0,
    module: user_track_trace_exports
  },
  "routes/user.traces.$id": {
    id: "routes/user.traces.$id",
    parentId: "routes/user.traces",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: user_traces_id_exports
  },
  "routes/user.analytics": {
    id: "routes/user.analytics",
    parentId: "routes/user",
    path: "analytics",
    index: void 0,
    caseSensitive: void 0,
    module: user_analytics_exports
  },
  "routes/user.customers": {
    id: "routes/user.customers",
    parentId: "routes/user",
    path: "customers",
    index: void 0,
    caseSensitive: void 0,
    module: user_customers_exports
  },
  "routes/user.workflows": {
    id: "routes/user.workflows",
    parentId: "routes/user",
    path: "workflows",
    index: void 0,
    caseSensitive: void 0,
    module: user_workflows_exports
  },
  "routes/user.support": {
    id: "routes/user.support",
    parentId: "routes/user",
    path: "support",
    index: void 0,
    caseSensitive: void 0,
    module: user_support_exports
  },
  "routes/user._index": {
    id: "routes/user._index",
    parentId: "routes/user",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: user_index_exports
  },
  "routes/user.orders": {
    id: "routes/user.orders",
    parentId: "routes/user",
    path: "orders",
    index: void 0,
    caseSensitive: void 0,
    module: user_orders_exports
  },
  "routes/user.traces": {
    id: "routes/user.traces",
    parentId: "routes/user",
    path: "traces",
    index: void 0,
    caseSensitive: void 0,
    module: user_traces_exports
  },
  "routes/logout_": {
    id: "routes/logout_",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login_": {
    id: "routes/login_",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/user": {
    id: "routes/user",
    parentId: "root",
    path: "user",
    index: void 0,
    caseSensitive: void 0,
    module: user_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
